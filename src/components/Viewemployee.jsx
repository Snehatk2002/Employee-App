import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const Viewemployee = () => {
    const [data,changedata]=useState([])
    const fetchData=()=>{
      axios.get("http://localhost:8080/view").then(
          (response)=>{
              console.log(response.data)
              changedata(response.data)
          }
      ).catch(
          (error)=>{
              console.log(error.message)
          }
      ).finally()

  }
  useEffect(()=>{fetchData()},[])
      
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