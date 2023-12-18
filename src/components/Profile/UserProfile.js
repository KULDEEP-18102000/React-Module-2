import ProfileForm from './ProfileForm';
import classes from './UserProfile.module.css';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useEffect } from 'react';
import { useContext } from 'react';
import AuthContext from '../../store/auth-context';

const UserProfile = () => {

  const history=useHistory()

  const ctx=useContext(AuthContext)

  // useEffect(()=>{
  //   if(localStorage.getItem('token')){
  //     console.log(localStorage.getItem('token'))
  //     ctx.loginHandler(localStorage.getItem('token'))
  //   }
  // },[])


  return (
    <section className={classes.profile}>
      <h1>Your User Profile</h1>
      <ProfileForm />
    </section>
  );
};

export default UserProfile;
