const axios = require('axios');
import { getCookiesData } from '../services/cookie'
var id = getCookiesData()
// console.log("tokentoken", token)
axios.defaults.headers.common['Authorization'] = JSON.stringify(id)



export function get(url) {
  return new Promise(async function (resolve, reject) {
    await axios({
      method: 'get',
      url: url,
      headers:
      {
        'authorization': id,
        'Accept': "application/json",
        "Content-Type": "application/json",
      }
    }).then((result) => {
      // console.log("resultttttttttttttttttttt", result)
      resolve(result);
    })
      .catch((err) => {
        console.log("error=: " + err);
        if (err == 'Error: Request failed with status code 403' || err == 'Error: Request failed with status code 401') {
          alert("Login to continue!!")
          window.location.href = '/admin/dashboard/login'
        } else {
          alert("Error while fetching list!")
        }

      });
  })
}

  