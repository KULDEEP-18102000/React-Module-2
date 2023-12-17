import { useState, useRef,useContext } from 'react';

import classes from './AuthForm.module.css';

import AuthContext from '../../store/auth-context';

const AuthForm = () => {

  const ctx=useContext(AuthContext)

  const [isLogin, setIsLogin] = useState(true);
  const [user,setUser]=useState({
    returnSecureToken:true,
    email:"",
    password:""
  })

  const [loading,setLoading]=useState(false)

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const addUser=async(e)=>{
    setLoading(true)
    e.preventDefault()
    console.log(user)
    if(isLogin==false){
      const response= await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBgisiq-vo6ATIrzPaLyCe3j876p8HEzVs',{
      method:'POST',
      body:JSON.stringify(user),
      headers:{
        'Content-Type':'application/json'
      }
    })

    if(!response.ok){
      const res=await response.json()
      setLoading(false)

      console.log(res)
      let errorMessage="Something Went Wrong"
      if(res && res.error && res.error.message){
        errorMessage=res.error.message
      }
      alert(errorMessage);
    }
    }
    else{
      const response= await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBgisiq-vo6ATIrzPaLyCe3j876p8HEzVs',{
      method:'POST',
      body:JSON.stringify(user),
      headers:{
        'Content-Type':'application/json'
      }
    })

    if(!response.ok){
      const res=await response.json()
      setLoading(false)

      console.log(res)
      let errorMessage="Something Went Wrong"
      if(res && res.error && res.error.message){
        errorMessage=res.error.message
      }
      alert(errorMessage);
    }
    else{
      const res=await response.json()
      setLoading(false)

      console.log(res.refreshToken)
      // localStorage.setItem('token',res.refreshToken)
      ctx.loginHandler(res.refreshToken)
    }
    
    }
    
    
    
    
    
    
    // console.log(res)
    setUser({email:"",password:"",returnSecureToken:true})
  }

  const onChangeHandler=(e)=>{
    e.preventDefault()
    setUser({...user,[e.target.name]:e.target.value})
  }

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={addUser}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' name='email' value={user.email} onChange={onChangeHandler} required />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input
            type='password'
            id='password'
            name='password'
            value={user.password}
            onChange={onChangeHandler}
            required
          />
        </div>
        <div className={classes.actions}>
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
          {loading===true?<p style={{color:'white'}}>Sending Request...</p>:<button style={{margin:'2px'}}>{isLogin?'Login':'Sign Up'}</button>}
          
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
