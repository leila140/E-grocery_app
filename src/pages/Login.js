import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../Store/actionCurrentUser";
import { useNavigate } from "react-router-dom";
import Helmet from '../Components/Helmet/Helmet'
import CommonSection from '../Components/UI/common-section/commonSection'
import { Container } from "reactstrap";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const[success,setSuccess]=useState(false)
  const[erreur,setErreur]=useState('')
   const dispatch=useDispatch()
   const navigate=useNavigate()
  
  
  const urlUsers="http://localhost:3500/users" 
    async function handlesubmit(e){
     e.preventDefault();
     try {
      const response=await axios.get(`${urlUsers}/${email}`)
      const user=response.data
     if(user?.password===password){
      const {id,nom,civilite,profile}=user
      dispatch(login(email,nom,civilite,profile))
      setSuccess(true)
      navigate("/")
     }
     else{
      setErreur("not logged verify your data")
      setSuccess(false)
     }
      console.log(response)
     } catch (error) {
      setSuccess(false)
      setErreur("erreur: "+error.message)
     }

    }

  return (
    <Helmet title='Login-page'>
    <CommonSection title='Login'/>
    
      <div className=" offset-lg-3 col-lg-6" style={{paddingBottom:"50px",paddingTop:'50px'}}>
        <form className="container" onSubmit={(event)=>handlesubmit(event)} >
          <div className="card">
            <div className="card-header">
              <h1>Login</h1>
              {success && <p style={{ backgroundColor:"green", color:"#FFF"}}> your are logged</p>}
               {!success && <p style={{backgroundColor:"red" , color:"#FFF"}}> {erreur}</p>}

            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      email<span className="errmsg">*</span>
                    </label>
                    <input
                      type="text"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      password<span className="errmsg">*</span>
                    </label>
                    <input
                      type="text"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="form-control"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer">
            
              <button type="submit" className="btn btn-primary" >
                <Link to='/Home' style={{textDecoration:'none',color:'white'}}>Connexion</Link>
              </button>
              |
              <Link to="/register" className="btn btn-success">
                Nouveau utilisateur
              </Link>
            </div>
          </div>
        </form>
      </div>
    </Helmet>
  );
}

export default Login;