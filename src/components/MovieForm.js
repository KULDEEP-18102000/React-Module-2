import { useState } from "react"

const MovieForm=(props)=>{

    const [formData,setFormData]=useState({
        Title:"",
        Text:"",
        Date:""
    })

    const MovieSubmitHandler=(e)=>{
        e.preventDefault()
        console.log("submit")
        console.log(formData)
        props.addMovie(formData)
        setFormData({Title:"",Text:"",Date:""})
    }

    const movieChangeHandler=(event)=>{
        // console.log(formData)
        setFormData({...formData,[event.target.name]:event.target.value})
    }

    return(
        <form onSubmit={MovieSubmitHandler}>
  <div className="mb-3">
    <label for="exampleInputTitle" className="form-label">Title</label>
    <input type="text" className="form-control" id="exampleInputTitle" name="Title" onChange={movieChangeHandler} value={formData.Title} aria-describedby="emailHelp"></input>
  </div>
  <div className="mb-3">
    <label for="exampleInputText1" className="form-label">Opening Text</label>
    <input type="text" className="form-control" id="exampleInputText1" name="Text" onChange={movieChangeHandler} value={formData.Text}></input>
  </div>
  <div className="mb-3">
    <label for="exampleInputDate" className="form-label">Release Date</label>
    <input type="date" className="form-control" id="exampleInputDate" name="Date" onChange={movieChangeHandler} value={formData.Date}></input>
  </div>
  <button type="submit" className="btn btn-primary">Add Movie</button>
</form>
    )
}

export default MovieForm