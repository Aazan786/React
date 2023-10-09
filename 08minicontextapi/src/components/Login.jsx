import React, {useState, useContext} from "react";
import UserContext from "../context/Usercontext.js";

function Login(){
    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')

    const {setuser} = useContext(UserContext)

    const handlesubmit = (e) => {
        e.preventDefault()
        setuser({username, password})
    }

    return(
        <div>
            <h1>Login</h1>
        <input type='text'
               value={username}
               onChange={(e) => setusername(e.target.value)}
               placeholder='username'/>
            {""}
        <input type='text'
               value={password}
               onChange={(e) => setpassword(e.target.value)}
               placeholder='passord'/>
        <button onClick={handlesubmit}>submit</button>
        </div>
    )
}

export default Login