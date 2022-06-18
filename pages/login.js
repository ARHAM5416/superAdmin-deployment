import React from 'react'
const axios = require('axios');
//import { userEndPoints } from '../../configuration/config'
import { userEndPoints } from './../configuration/config';
import { setCookiesData, getCookiesData } from './../services/cookie';
import { useState, useEffect } from "react";

export default function login() {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const onFinish = async values => {
    console.log("hello")
    event.preventDefault()
    var apiResponse = await axios({
      method: 'post',
      url: process.env.NEXT_PUBLIC_APP_HOST + 'admin/login',
      headers: {},
      data: {
        loginId: username,
        password: password
      }
    })
    if (apiResponse.status !== 200) {
      alert("Login Failed!")
      console.log("failed")
    }
    else if (apiResponse.status == 200) {
      setCookiesData(apiResponse.data.data[0]._id)
      alert("Login successfully!")
      let id = getCookiesData()
      console.log(id)
      window.location.href = 'main'
    }
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="container-scroller">
    <div className="container-fluid page-body-wrapper full-page-wrapper">
      <div className="content-wrapper d-flex align-items-center auth px-0">
        <div className="row w-100 mx-0">
          <div className="col-lg-4 mx-auto">
            <div className="auth-form-light text-left py-5 px-4 px-sm-5">
              <div className="brand-logo">
                LOGO
                {/* <img src="../../images/logo.svg" alt="logo"/> */}
              </div>
              <h4>Super Admin</h4>
              <h6 className="font-weight-light">Login</h6>
              <form className="pt-3">
                <div className="form-group">
                  <input type="email" className="form-control form-control-lg" id="exampleInputEmail1" placeholder="Username" name="username" onChange={(e) => setUsername(e.target.value)}/>
                </div>
                <div className="form-group">
                  <input type="password" className="form-control form-control-lg" id="exampleInputPassword1" placeholder="Password" name="password" onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className="mt-3" onClick={onFinish}>
                  <a className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" >SIGN IN</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
