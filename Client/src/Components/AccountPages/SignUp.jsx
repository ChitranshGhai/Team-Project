import { useState } from "react"
import {useNavigate} from "react-router-dom"

function SignUp() {
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [phone,setPhone]=useState("")
  const [password,setpassword]=useState("")
  const navigate= useNavigate();

  const handleSubmit=async(e)=>{
    e.preventDefault()
    console.log({name:name,email:email,phone:phone,password:password})
    let result= await fetch('http://localhost:9998/api/SignUp',{
      method:'post',
      body: JSON.stringify({name,email,phone,password}),
      headers:{
        "Content-Type":"application/json"
      }
    });
    result= await result.json()
    if(result){
      navigate("/Login")
      console.log(result);
    }
    else{
      alert("Please Fill All The Enteries");
    }

  }

  return (
    <div>
      <form method="post" autoComplete="off" onSubmit={handleSubmit}>
        <div className="SignUp-Main-container">
          <img
            className="SignUp-Logo"
            src="https://i.pinimg.com/564x/19/ff/7e/19ff7e96eba588957d722382b7c84908.jpg"
            alt="logo"
          />
          <p id="Heading">SIGN-UP</p>

          <input
            className="Signup-UserName-Input"
            type="text"
            id="userName"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            name="userName"
            required
            placeholder="Username"
          />
          <input
            className="Signup-Email-Input"
            type="email"
            id="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            name="email"
            required
            placeholder="E-mail"
          />
          <input
            className="Signup-Phone-Input"
            type="tel"
            id="number"
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
            required
            name="number"
            pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
            placeholder="Phone number"
          />
          <input
            className="Signup-Password-Input"
            type="password"
            name="password"
            value={password}
            onChange={(e)=>setpassword(e.target.value)}
            id="password"
            required
            placeholder="Password"
          />
          <button id="SignUp-Btn" type="submit">
            Create Account
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
