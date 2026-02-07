import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

function Register() {
  const [login, setLogin] = useState();

  //JSON SERVER Storing
const[users,setUsers] = useState({
  firstName:"",
  lastName:"",
  password:"",
  confirmPassword:"",
})
const[userName,setUsername] =useState("")
const[password,setPassword] = useState("")

// /Error --form validations

const[error,setError] = useState({})
const validate = () =>{
  let errorObj = {}
  if(!users.firstName.trim()){
    {login?errorObj.firstName = "Please Enter a valid userName":errorObj.firstName = "Please Enter a Valid Name"}
  }
  if(!users.lastName.trim()) {
    errorObj.lastName = "Please Enter a Valid Name"
  }
  if(!users.password.trim()){
    {login?errorObj.password="Please enter atleast digits":errorObj.password="Please enter atleast 4 digits"}
  }
  if(!users.confirmPassword.trim()){
    errorObj.confirmPassword="Please enter your password"
  }
  setError(errorObj)
  return Object.keys(errorObj).length===0
}
//Form handle
const handlForm = (e) =>{
  setUsers({...users,[e.target.name]:e.target.value})
  setError({...error,[e.target.name]:""} )
}


const handleSubmit = (e) =>{
 e.preventDefault();
 if(!validate()) return
fetch("http://localhost:3000/users",{
  method:"POST",
  headers:{
    "content-type":"application/json"
  },
  body:JSON.stringify(users)
})
setUsers({firstName:"",
  lastName:"",
  password:"",
  confirmPassword:"",})
}


//form handle
  function handleForm() {
    setLogin(true);
  }

  const handleLogin = (e) =>{
    e.preventDefault()
    let handleUserValidation = () =>{
      fetch(`http://localhost:3000/users?firstName=${userName}&password=${password}`,{
      method:"GET",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify(handleUserValidation)
      }
       
      )
    }
    if(handleUserValidation.data.length > 0){
      console.log("login successful")
    }
  }
  // function handleRegistration() {
  //   setLogin(false);
  // }


  useEffect(() => {
  document.body.classList.add("login-page");
  return () => document.body.classList.remove("login-page");
}, []);


  return (
    <>
      {/* <section className="form-sec">
        <video autoPlay muted loop playsInline className="bg-video">
          <source src="/bg-video.mp4" type="video/mp4" />
        </video>
      </section> */}
      <section className="container container-fluid form-sec">
       <div className="wrapper">
        <div className="" >
        <fieldset className="p-5 d-flex justify-content-center align-items-center min-vh-100  ">
          <form className="" onSubmit={handleSubmit}>
            <div className="card  glass-card   rounded-4 form-label p-5 bg-image inner ">
              <div className="" >
              <div className=" register-sec">
                <h2 className="mb-2">
                  {login? " Registration Form " : "Login Form"}
                </h2>
              </div>
              <div className="p-1">
                <label for="firstName" className="mb-1">
                  {login? "FirstName" : "UserName"}
                </label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="first name"
                  className="form-control"
                  value={users.firstName}
                  onChange={login? handlForm :(e)=>setUsername(e.target.value)}
                  name="firstName"
                />
                {error.firstName && <p style={{color:"red"}}>{error.firstName}</p>}
              </div>
              <div className="p-1">
                {login? (
                  <>
                    <label for="lastName">Last Name</label>
                    <input
                      type="text"
                      id="lasttName"
                      placeholder="last name"
                      className="form-control"
                      value={users.lastName}
                      onChange={handlForm}
                      name="lastName"
                    />
                    {error.lastName && <p style={{color:"red"}}>
                      {error.lastName}</p>}
                  </>
                ) : (
                  ""
                )}
              </div>
              <div>
                {login? (
                  <>
                    <div className="p-1">
                      <label for="password">Password</label>
                      <input
                        type="password"
                        id="password"
                        placeholder="password"
                        className="form-control"
                        value={users.password}
                        onChange={handlForm}
                        name="password"
                      />
                      {error.password && <p style={{color:"red"}}>
                      {error.password}</p>}
                    </div>
                    <div className="p-1">
                      <label for="confirm-password">Confirm password</label>
                      <input
                        type="password"
                        id="confirm-password"
                        placeholder="confirm password"
                        className="form-control"
                        value={users.confirmPassword}
                        onChange={handlForm}
                        name="confirmPassword"
                      />
                       {error.confirmPassword && <p style={{color:"red"}}>
                      {error.confirmPassword}</p>}
                    </div>
                  </>
                ) : (
                  <div>
                    <label for="password">Password</label>
                    <input
                      type="password"
                      id="password"
                      placeholder="password"
                      className="form-control"
                      onChange={(e)=>setPassword(e.target.value)}
                    />
                     {error.password && <p style={{color:"red"}}>
                      {error.password}</p>}
                  </div>
                )}
              </div>
              <div>
                <Link onClick={handleForm}>
                <Link to="/">
                  <p>
                    {login? (
                      "Already Have An Account"
                    ) : (
                      <Link>
                        <p>If You Don't Have An Account</p>
                      </Link>
                    )}
                  </p>
                  </Link>
                </Link>
              </div>
              <div>
                <button className="btn form-control btn-outline-dark btn-light btn-sm w-100 ">
                  {login? (
                    <Link to="/" className="btn-text">
                      Register
                    </Link>
                  ) : (
                    <Link to="/home"  className="btn-text">Login</Link>
                  )}
                </button>
              </div>
              </div>
            </div>
          </form>
        </fieldset>
        </div>
        </div>
      </section>
    </>
  );
}

export default Register;
