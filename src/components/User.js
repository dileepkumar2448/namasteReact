import { useEffect, useState } from "react";

const User =(props) =>{
    const [count]=useState(0);
   useEffect(()=>{

   },[])

   async function getUserInfo(){
    const user_data=await fetch("https://api.github.com/users/dileepkumar2448")
    console.log(user_data.json())
   }
    return <div className="user-card">
        <h1> Count: {count}</h1>
        <h1> Count2: {count2}</h1>
        <h2>
            Name: {props.name}
        </h2>
        <h3>Location: Hyderabad</h3>
        <h4>Contact: dileepkumar2448@gmail.com</h4>
    </div>
}

export default User;