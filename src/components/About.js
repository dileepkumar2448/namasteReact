import React from 'react'
import User from './User';
import UserClass from './UserClass';


// export const About = () => {
//   return (
//     <div>
//         <h1>About us</h1>
//         {/* <h2>This is namaste React Web series</h2> */}
      
//         <UserClass name={"First (class)"} location={"Hyderabad (class)"}/>
//         <UserClass name={"Second (class)"} location={"Hyderabad (class)"}/>
//     </div>
//   )
// }

class About extends React.Component{

  constructor(props){
    super(props);
   
  }

  componentDidMount(){
   
  }


  render(){
  
    return (
      <div>
          <h1>About us</h1>
          {/* <h2>This is namaste React Web series</h2> */}
        
          <UserClass name={"First (class)"} location={"Hyderabad (class)"}/>
      </div>
    )

  }
}


export default About;