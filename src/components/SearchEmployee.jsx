import React, { useState } from 'react'
import Navbar from './Navbar'
import { useSearchParams } from 'react-router-dom'

const SearchEmployee = () => {
    const[data,setData]=useState(
        {
            "employeeid":""
        }
    )
    const inputHandler=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(data)
    }
  return (
    <div>
        <Navbar/>
        <div className="conatiner">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">EMPLOYEE ID</label>
                        <input type="text" className="form-control" name='employeeid' value={data.employeeid} onChange={inputHandler} />
                        </div>
                        <center>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <button class="btn btn-info" onClick={readValue}>SEARCH</button>
                    </div>
                    </center>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SearchEmployee