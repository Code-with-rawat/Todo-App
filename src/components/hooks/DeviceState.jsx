import React, { useState } from 'react'

// const User = [
//     {name:"Alice", age: 30},
//     {name:"Himanshu", age : 20},
//     {name:"Lucky", age: 20},
//     {name:"bobby", age: 30}
// ]
export default function DeviceState() {
    const [User,setUser] = useState([
    {name:"Alice", age: 30},
    {name:"Himanshu", age : 20},
    {name:"Lucky", age: 20},
    {name:"bobby", age: 30}
]);
 const userCount = User.length;
 const userAverage = User.reduce((acccum,CurrVal)=> acccum + CurrVal.age,0/userCount);

  return (
    <div>
        <h2>Users List</h2>
        <ul>
            {User.map((userName,index)=>{
                return(
                    <>
                    <li key={index}>
                    {userName.name} - {userName.age} Old year
                    </li>
                    </>  
                )
                
            })}
            <p>Total Student:{userCount}</p>
            <p>Total Student:{userAverage}</p>


        </ul>     
    </div>
  )
}
