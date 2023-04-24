import React, { useState, useEffect,useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const emailReducer=(state,action)=>{
  if(action.type=='USER_INPUT'){
    return {value:action.val,isValid:action.val.includes('@')}
  }
  if(action.type=='INPUT_BLUR'){
    return {value:state.value,isValid:state.value.includes('@')}
  }

  return {value:'',isValid:false}
}

const passwordReducer=(state,action)=>{
  if(action.type=='USER_INPUT'){
    return {value:action.val,isValid:action.val.trim().length > 6}
  }
  if(action.type=='INPUT_BLUR'){
    return {value:state.value,isValid:state.value.trim().length>6}
  }
  return {value:'',isValid:false}
}

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  const [emailState,dispatchEmail]=useReducer(emailReducer,{value:'',isValid:null})
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [passwordState,dispatchPassword]=useReducer(passwordReducer,{value:'',isValid:null})
  const [enteredCollegeName, setEnteredCollegeName] = useState('');
  const [formIsValid, setFormIsValid] = useState(false);

  // useEffect(() => {
  //   console.log("inside useEffect")
  //   const identifier=setTimeout(()=>{
  //     console.log("checking")
  //     setFormIsValid(
  //       enteredEmail.includes('@') && enteredPassword.trim().length > 6 && enteredCollegeName.trim().length>5
  //     );
  //   },500)
    
  //   return ()=>{
  //     console.log("clear timer")
  //     clearTimeout(identifier)
  //   }
  // }, [enteredEmail, enteredPassword,enteredCollegeName]);

  useEffect(() => {
    console.log('EFFECT RUNNING');

    return () => {
      console.log('EFFECT CLEANUP');
    };
  }, []);

  const emailChangeHandler = (event) => {
    // setEnteredEmail(event.target.value);
    // console.log("email changing")
    // console.log(event.target.value)
    dispatchEmail({type:'USER_INPUT',val:event.target.value})

    setFormIsValid(
      event.target.value.includes('@') && passwordState.value.trim().length > 6
    );
  };

  const passwordChangeHandler = (event) => {
    // setEnteredPassword(event.target.value);
    dispatchPassword({type:'USER_INPUT',val:event.target.value})

    setFormIsValid(
      emailState.isValid && event.target.value.trim().length > 6
    );
  };

  const collegeChangeHandler=(event)=>{
    setEnteredCollegeName(event.target.value)
  }

  const validateEmailHandler = () => {
    // setEmailIsValid(enteredEmail.includes('@'));
    dispatchEmail({type: 'INPUT_BLUR'})
  };

  const validatePasswordHandler = () => {
    // setPasswordIsValid(enteredPassword.trim().length > 6);
    dispatchPassword({type: 'INPUT_BLUR'})
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
<br/>
<label htmlFor="college-name">College Name</label>
          <input
            type="text"
            id="college-name"
            value={enteredCollegeName}
            onChange={collegeChangeHandler}
            // onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;