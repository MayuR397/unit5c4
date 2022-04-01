import { useState } from "react";
import axios from 'axios';

export const LoginSignUp = () => {
    const [eUser,setEuser] = useState({
        name:"",
        password:""
    })
    const [user,setUser] = useState(
        {
            name: "",
            password: "",
            location: "",
            interests: [],
            image: "",
            subscribed: []
        }
    )
    const handelChange = (event)=>{
        if(event.target.checked){
            setUser({...user,interests:[...user.interests,event.target.className]})
            return;
        } else if(!event.target.checked){
            
            setUser({...user,[event.target.className]:event.target.value})
        }
    }
    const handelLogin = (event)=>{
        setEuser({...user,[event.target.className]:event.target.value})
    }
    return (
      <div className="loginSignUp">
        <form className="signUp" onSubmit={(e) => {
            e.preventDefault()
            axios.post(`http://localhost:8080/users`,user)
        }}>
          <h1>SignUp</h1>
          <label>Name</label>
          <input
            placeholder="Enter name here"
            type="text"
            className="name"
            onChange={(event) => { handelChange(event) }}
            required
          />
          <br />
          <label>Password</label>
          <input
            placeholder="Enter password here"
            type="text"
            className="password"
            onChange={(event) => { handelChange(event) }}
            required
          />
          <br />
          <select className="location" onChange={(event) => { handelChange(event) }}>
            <option value=""></option>
            <option value="jalgaon">Jalgaon</option>
            <option value="pune">Pune</option>
            <option value="kalyan">Kalyan</option>
            <option value="mumbai">Mumbai</option>
          </select>
          <label>Interests</label>
          <br />
          <label>Technology</label>
          <input
            type="checkbox"
            className="technology"
            onChange={(event) => { handelChange(event) }}
          />
          
          <label>Food</label>
          <input type="checkbox" className="food" onChange={(event) => { handelChange(event) }} />
          
          <label>Movies</label>
          <input type="checkbox" className="movies" onChange={(event) => { handelChange(event) }} />
          <br />
          <label>Culture</label>
          <input type="checkbox" className="culture" onChange={(event) => { handelChange(event) }} />
          
          <label>Art</label>
          <input type="checkbox" className="art" onChange={(event) => { handelChange(event) }} />
          
          <label>Drama</label>
          <input type="checkbox" className="drama" onChange={(event) => { handelChange(event) }} />
          <br />
          <label>Image</label>
          <input
            type="text"
            className="image"
            onChange={(event) => { handelChange(event) }}
            required
          />
          <br />
          <input type="submit" className="submitSignUpForm" />
        </form>
        <form className="login" onSubmit={(e) => {
            e.preventDefault()
            axios.get('http://localhost:8080/users').then(({data})=>{
                const userDetails = data.filter(ele=>{
                    return ele.name===eUser.name
                })
                console.log(userDetails)
                localStorage.setItem("userLoginDetails",JSON.stringify(userDetails))
            })
            
         }}>
          <h1>Login</h1>
          <label>Name</label>
          <input
            type="text"
            className="name"
            onChange={(event) => { handelLogin(event) }}
            required
          />
          <br />
          <label>Password</label>
          <input
            type="text"
            className="password"
            onChange={(event) => { handelLogin(event) }}
            required
          />
          <br />
          <input type="submit" className="submitLoginForm" />
        </form>
      </div>
    );
  };