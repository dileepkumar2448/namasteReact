import React from "react";


class UserClass extends React.Component{
    constructor(props){
        super(props)
        this.state={
            userInfo:{
                login:"dummy",
                location:"India",
                avatar_url:""
            }
        }
        

    }

    
  async componentDidMount(){
    const data=await fetch("https://api.github.com/users/dileepkumar2448");
    const json=await data.json();
    console.log(json)
    this.setState({
        userInfo:json,
    })
  }

    render(){
    
       const {name,avatar_url,location}=this.state.userInfo;
       debugger;

        return (
        <div className="user-card">
        <img src ={avatar_url}/>
         
        <h2>
            Name: {name}
        </h2>
        <h3>Location: {location}</h3>
        <h4>Contact: dileepkumar2448@gmail.com</h4>
    </div>)

    }
}

export default UserClass;