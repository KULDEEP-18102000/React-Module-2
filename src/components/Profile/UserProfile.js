import ProfileForm from './ProfileForm';
import classes from './UserProfile.module.css';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useEffect } from 'react';

const UserProfile = () => {

  const history=useHistory()

  // useEffect(()=>{
  //   if(!localStorage.getItem('token')){
  //     history.push('/auth')
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
