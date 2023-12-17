import { Link } from 'react-router-dom';

import classes from './MainNavigation.module.css';
import AuthContext from '../../store/auth-context';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const MainNavigation = () => {

  const ctx=useContext(AuthContext)

  const history=useHistory()

  const isLoggedIn=ctx.isLoggedIn

  const logOut=()=>{
    ctx.logOutHandler()
    history.push('/auth')
  }


  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          {!isLoggedIn && (
            <li>
            <Link to='/auth'>Login</Link>
          </li>
          )}

          {isLoggedIn && (
            <li>
            <Link to='/profile'>Profile</Link>
          </li>
          )}
          
          {isLoggedIn && (
            <li>
            <button onClick={logOut}>Logout</button>
          </li>
          )}
          
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
