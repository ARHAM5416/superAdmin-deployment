import React, {useEffect} from 'react';
const axios = require('axios');
import { getCookiesData } from '../services/cookie'
var id = getCookiesData()
axios.defaults.headers.common['Authorization'] = JSON.stringify(id)

export default function User() {
  useEffect(
    () => {
      fetchUser();
    },
    []);
  const fetchUser = async values => {
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
    }
  };

  return (
    <button type="submit" onClick={fetchUser}>UserDetail</button>
  )
    
     
}