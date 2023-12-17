import AuthForm from '../components/Auth/AuthForm';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useEffect,useContext } from 'react';
import AuthContext from '../store/auth-context';

const AuthPage = () => {

  const history=useHistory()
  const ctx=useContext(AuthContext)

  // useEffect(()=>{
  //   if(ctx.isLoggedIn){
  //     history.push('/profile')
  //   }
  // },[])

  return <AuthForm />;
};

export default AuthPage;
