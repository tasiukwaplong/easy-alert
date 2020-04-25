const axios = require('axios');
const env = require('../config');
const registerUser = (data)=>{
    //make a post call to url
   return axios.post(`${env.API_URL}/register`, data)
      .then(function (response) {
        // console.log(response);
        const message = (response.status === 200) ? response.data.message : "Unable to login. try again later";
        const error = (response.status === 200) ? response.data.error : true;
        return {error, message};
      })
      .catch(function (error) {
        // console.log(error);
        return {error:true,message:`We can not register you at the moment. Kindly check back later${error}`};
      });
}
const obtainSession = (cred) => {
  return axios.post(`${env.API_URL}/login`, cred)
    .then(function (response) {
      // console.log(response);
      const message = (response.status === 200) ? response.data.message : "Unable to login. try again later";
      const error = (response.status === 200) ? response.data.error : true;
      return {error, message};
    })
    .catch(function (error) {
      // console.log(error);
      return {error:true,message:`We can not register you at the moment. Kindly check back later${error}`};
    });
}
const getUserData = (session) => {
   const emptyData = {
        usernmae: '-',
        name: 'Error fetching data',
        email: '-',
        phone: '-',
        balance: 'ref:-,bal:-',
        subscribe: '-',
        code: '-',
        refered_by: '-',
        type: '-',
        confirmation_status: '-',
        session: '-'
      };
  return axios.post(`${env.API_URL}/user`, session)
    .then(function (response) {
      const message = (response.status === 200) ? response.data.message : emptyData;
      const error = (response.status === 200) ? response.data.error : true;
      return {error, message};
    })
    .catch(function () {
      // console.log(error);
      return {error:true,message:emptyData};
    });
}
const addTopic = (data) => {
  // console.log(data);return
 return axios.post(`${env.API_URL}/topic`, data)
   .then(function (response) {
     const message = (response.status === 200) ? response.data.message : '';
     const error = (response.status === 200) ? response.data.error : true;
     return {error, message};
   })
   .catch(function () {
     // console.log(error);
     return {error:true,message:''};
   });
}
module.exports = {registerUser, obtainSession, getUserData, addTopic}