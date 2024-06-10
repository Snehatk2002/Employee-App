import React, { useState } from 'react'
import Navbar from './Navbar'

const Viewemployee = () => {
    const [data,changedata]=useState(
        [
            {"employeeid":1,"employeename":"sona","designation":"manager","salary":5000},
            {"employeeid":2,"employeename":"vishnu","designation":"hr manager","salary":8000}
            
        ]
    )
  return (
    <div>
        <Navbar/>
        <div className="conatiner">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <table class="table">
  <thead>
    <tr>
      <th scope="col">EMPLOYEE ID</th>
      <th scope="col">EMPLOYEE NAME</th>
      <th scope="col">DESIGNATION</th>
      <th scope="col">SALARY</th>
    </tr>
  </thead>
  <tbody>
    {data.map(
        (value,index)=>{
            return <tr>
            <th scope="row">{value.employeeid}</th>
            <td>{value.employeename}</td>
            <td>{value.designation}</td>
            <td>{value.salary}</td>
          </tr>
          
        }
    )}
  </tbody>
</table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Viewemployee