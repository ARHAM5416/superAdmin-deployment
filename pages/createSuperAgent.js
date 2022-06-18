import React from "react";
import Header from '../components/header/Header'
import Topbar from "../components/topbar/Topbar";
import NoSSRWrapper from '../components/no-ssr/noSsr'
import { useState, useEffect } from "react";
const axios = require("axios");
import { setCookiesData, getCookiesData } from '../services/cookie';
const id = getCookiesData();

export default function createAgent() {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [phone, setPhone] = useState(null);
  const [limit, setLimit] = useState(null);
  const url = process.env.NEXT_PUBLIC_APP_HOST;
  const onFinish = async (values) => {
    console.log("hello");
    event.preventDefault();
    var apiResponse = await axios({
      method: "post",
      url: url + "users/add",
      headers: {},
      data: {
        name: username,
        password: password,
        phone: phone,
        role: "superAgent",
        parentType: "admin",
        parentId: id,
        limit: limit
      },
    });
    var myModalEl = document && document.getElementById("staticBackdrop");
    var modal = bootstrap && bootstrap.Modal.getInstance(myModalEl);
    if (apiResponse.status !== 200) {
      alert("Error!");
      console.log("failed");
    } else if (apiResponse.status == 200) {
      alert("agent successfully created!");
      console.log(apiResponse)
      console.log("successfull");
      console.log(modal);
      document.getElementById("form").reset();
      modal.hide();
      fetchAllUser();
    }
  };

  useEffect(() => {fetchAllUser();
  },[]);
  const fetchAllUser = async values => {
    event.preventDefault()
    var apiResponse = await axios({
      method: 'get',
      url: process.env.NEXT_PUBLIC_APP_HOST + 'users/id/' + id,
      headers:
      {
        'authorization': id,
        'Accept': "application/json",
        "Content-Type": "application/json",
      }
    })
    if (apiResponse.status !== 200) {
      alert("Login Failed!")
      console.log("Getting error while fetching record!")
    }
    else if (apiResponse.status == 200) {
      alert(apiResponse.data.message)
      const apiResponseData = apiResponse.data.data;
      console.log("data",apiResponseData)
    }
  };


  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <NoSSRWrapper>
    <div className="container-scroller">
      <Topbar></Topbar>
      <div className="container-fluid page-body-wrapper">
        <Header />
        <div className="main-panel">
          <div className="content-wrapper">
            <div className="row">
              <div className="col-md-12 grid-margin">
                <div className="d-flex justify-content-between flex-wrap">
                  <div className="d-flex align-items-end flex-wrap">
                    <div className="d-flex">
                      <i className="mdi mdi-home text-muted hover-cursor"></i>
                      <p className="text-muted mb-0 hover-cursor">
                        &nbsp;/&nbsp;Dashboard&nbsp;/&nbsp;
                      </p>
                      <p className="text-primary mb-0 hover-cursor">
                        Create Super Agent
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 stretch-card">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex justify-content-md-between">
                      <p className="card-title"> Super Agent List</p>
                      <div>
                        <button
                          data-bs-toggle="modal"
                          data-bs-target="#staticBackdrop"
                          type="button"
                          className="btn btn-inverse-dark btn-fw"
                        >
                          Create Super Agent
                        </button>
                      </div>
                    </div>
                    <div className="table-responsive">
                      <table id="recent-purchases-listing" className="table">
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th>Login Id</th>
                            <th>Password</th>
                            <th>Phone</th>
                            <th>Status</th>
                            <th>Role</th>
                          </tr>
                        </thead>
                        <tbody>
                          {/* <tr>
                            <td>Jeremy Ortega</td>
                            <td>Levelled up</td>
                            <td>Catalinaborough</td>
                            <td>$790</td>
                            <td>06 Jan 2018</td>
                            <td>$2274253</td>
                        </tr>
                        <tr>
                            <td>Alvin Fisher</td>
                            <td>Ui design completed</td>
                            <td>East Mayra</td>
                            <td>$23230</td>
                            <td>18 Jul 2018</td>
                            <td>$83127</td>
                        </tr>
                        <tr>
                            <td>Emily Cunningham</td>
                            <td>support</td>
                            <td>Makennaton</td>
                            <td>$939</td>
                            <td>16 Jul 2018</td>
                            <td>$29177</td>
                        </tr>
                        <tr>
                            <td>Minnie Farmer</td>
                            <td>support</td>
                            <td>Agustinaborough</td>
                            <td>$30</td>
                            <td>30 Apr 2018</td>
                            <td>$44617</td>
                        </tr>
                        <tr>
                            <td>Betty Hunt</td>
                            <td>Ui design not completed</td>
                            <td>Lake Sandrafort</td>
                            <td>$571</td>
                            <td>25 Jun 2018</td>
                            <td>$78952</td>
                        </tr>
                        <tr>
                            <td>Myrtie Lambert</td>
                            <td>Ui design completed</td>
                            <td>Cassinbury</td>
                            <td>$36</td>
                            <td>05 Nov 2018</td>
                            <td>$36422</td>
                        </tr>
                        <tr>
                            <td>Jacob Kennedy</td>
                            <td>New project</td>
                            <td>Cletaborough</td>
                            <td>$314</td>
                            <td>12 Jul 2018</td>
                            <td>$34167</td>
                        </tr>
                        <tr>
                            <td>Ernest Wade</td>
                            <td>Levelled up</td>
                            <td>West Fidelmouth</td>
                            <td>$484</td>
                            <td>08 Sep 2018</td>
                            <td>$50862</td>
                        </tr> */}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className="footer">
            <div className="d-sm-flex justify-content-center justify-content-sm-between">
              <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">
                Copyright ©{" "}
                <a href="https://www.bootstrapdash.com/" target="_blank">
                  bootstrapdash.com{" "}
                </a>
                2021
              </span>
              <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">
                Only the best{" "}
                <a href="https://www.bootstrapdash.com/" target="_blank">
                  {" "}
                  Bootstrap dashboard{" "}
                </a>{" "}
                templates
              </span>
            </div>
          </footer>
        </div>
      </div>
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Create Agent
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form id="form" className="forms-sample">
                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Phone"
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Limit</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Limit"
                    onChange={(e) => setLimit(e.target.value)}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                onClick={onFinish}
                type="button"
                className="btn btn-primary"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </NoSSRWrapper>
  );
}
