import { Switch, Route,Redirect } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import { useContext } from 'react';
import AuthContext from './store/auth-context';
import { useEffect } from 'react';

function App() {

  const ctx=useContext(AuthContext)

  // useEffect(()=>{
  //   if(localStorage.getItem('token')){
  //     console.log(localStorage.getItem('token'))
  //     ctx.loginHandler(localStorage.getItem('token'))
  //   }
  // },[])


  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <HomePage />
        </Route>
        {!ctx.isLoggedIn && (
          <Route path='/auth'>
          <AuthPage />
        </Route>
        )}
        {ctx.isLoggedIn && (
        <Route path='/profile'>
        <UserProfile />
      </Route> 
      )}
      {/* <Route path='/profile'>
        {ctx.isLoggedIn && <UserProfile />}
        {!ctx.isLoggedIn && <Redirect to='/auth' />}
      </Route> */}
        <Route path='*'>
          <Redirect to='/' />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
