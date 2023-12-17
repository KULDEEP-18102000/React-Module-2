import classes from './ProfileForm.module.css';
import { useRef,useContext } from 'react';
import AuthContext from '../../store/auth-context';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const ProfileForm = () => {

  const EnteredNewPassword=useRef()

  const history=useHistory()

  const ctx=useContext(AuthContext)
  console.log(ctx)

  const ResetPassword=async(e)=>{
    e.preventDefault()
    console.log(EnteredNewPassword.current.value)
    console.log(ctx.token)
    const response= await fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBgisiq-vo6ATIrzPaLyCe3j876p8HEzVs',{
      method:'POST',
      body:JSON.stringify({
        idToken:ctx.token,
        password:EnteredNewPassword.current.value,
        returnSecureToken:true
      }),
      headers:{
        'Content-Type':'application/json'
      }
    })
    const res=await response.json()
    console.log(res)
    if(response.ok){
      EnteredNewPassword.current.value=''
      ctx.logOutHandler()
      history.push('/auth')
    }
    
  }

  return (
    <form className={classes.form} onSubmit={ResetPassword}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' ref={EnteredNewPassword}/>
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
