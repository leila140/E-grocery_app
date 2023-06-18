import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {toast} from 'react-toastify'
import Helmet from '../Components/Helmet/Helmet'
import CommonSection from '../Components/UI/common-section/commonSection'
function Register() {
    
 
    const [nom, setNom] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [civilite, setCivilite] = useState("masculin");
    const [adresse, setAdresse] = useState("adresse");
    const [ville, setVille] = useState("");
    const [succes,setSuccess]=useState(false)
    const [msgError,setMsgError]=useState('')
    const urlUsers="http://localhost:3500/users" 
    
    async function handleSubmit(e){
     e.preventDefault()
     const user={id:email,nom:nom,password:password,civilite:civilite,ville:ville,adresse:adresse,profile:"admin"}
   try {
    const response=await axios.post(urlUsers,user)
    setSuccess(true)
    toast.success("succes ajout ok......")
   } catch (error) {
     setMsgError(error.message)
     setSuccess(false)
     toast.error(error.message)
   }
   
    }
return (
          <Helmet title='Register-page'>
         <CommonSection title='Register'/>
          <div className="offset-lg-3 col-lg-6"  style={{paddingBottom:"50px",paddingTop:'50px'}}>
            <form className="container"  onSubmit={handleSubmit}>
              <div className="card">
                <div className="card-header">
                  <h1>Enregistrement</h1>
                </div>
                <div className="card-body">
                  <div className="row">
                  <div className="col-lg-6">
                      <div className="form-group">
                        <label>
                          nom<span className="errmsg">*</span>
                        </label>
                        <input
                          type="text"
                          value={nom}
                          onChange={(e) => setNom(e.target.value)}
                          className="form-control"
                        />
                      </div>
                    </div>
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
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="form-control"
                        />
                      </div>
                    </div>
    
                   
    
                    
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label>
                          ville:<span className="errmsg">*</span>
                        </label>
                        <select
                          className="form-control"
                          onChange={(e) => setVille(e.target.value)}
                        >
                          <option value="casa">casa</option>
                          <option value="rabat">rabat</option>
                          <option value="fes">fes</option>
                          <option value="laayoune">laayoune</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label>
                          civilite<span className="errmsg">*</span>
                        </label>
                        <br />
    
                        <input
                          type="radio"
                          name="civilite"
                          value="masculin"
                          checked={civilite == "masculin"}
                          onChange={(e) => setCivilite(e.target.value)}
                          className="app-check"
                        />
                        <label>Masculin</label>
                        <br />
    
                        <input
                          type="radio"
                          name="civilite"
                          value="feminin"
                          checked={civilite == "feminin"}
                          onChange={(e) => setCivilite(e.target.value)}
                          className="app-check"
                        />
                        <label>feminin</label>
                      </div>
                    </div>
    
                    <div className="col-lg-12">
                      <div className="form-group">
                        <label>
                          adresse:<span className="errmsg">*</span>
                        </label>
                        <textarea
                          value={adresse}
                          onChange={(e) => setAdresse(e.target.value)}
                          className="form-control"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-footer">
                  <button type="submit" className="btn btn-primary">
                    Enregistrement
                  </button>
                  |
                  <Link to="/" className="btn btn-danger">
                    Home
                  </Link>
                </div>
              </div>
            </form>
          </div>
        
      </Helmet>
  )
}

export default Register