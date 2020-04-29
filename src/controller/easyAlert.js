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
      return {error:true,message:`Unable to login at the moment. Kindly check back later${error}`};
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
    //  console.log(message)
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
const changePsw = (data) => {
  // console.log(data);return
 return axios.post(`${env.API_URL}/update`, data)
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

const getTopics = (session) => {
 return axios.get(`${env.API_URL}/all-topics`, session)
   .then(function (response) {
     const message = (response.status === 200) ? response.data.message : 'Error fetching';
     const error = (response.status === 200) ? response.data.error : true;
     return {error, message};
   })
   .catch(function () {
     // console.log(error);
     return {error:true,message:'Error fetching topics'};
   });
}

const updateTopic = (data) => {
  return axios.post(`${env.API_URL}/updatetopics`, data)
    .then(function (response) {
      const message = (response.status === 200) ? response.data.message : 'Error updating topics';
      const error = (response.status === 200) ? response.data.error : true;
      return {error, message};
    })
    .catch(function () {
      // console.log(error);
      return {error:true,message:'Error updating topics'};
    });
 }
 const getUserHistroy = (data) => {
   console.log(data)
  return axios.post(`${env.API_URL}/history`, data)
    .then(function (response) {
      const message = (response.status === 200) ? response.data.message : 'Error fetching history';
      const error = (response.status === 200) ? response.data.error : true;
      return {error, message};
    })
    .catch(function () {
      // console.log(error);
      return {error:true,message:'Error updating topics'};
    });
 }

module.exports = {registerUser, obtainSession, getUserData, addTopic, changePsw, getTopics, updateTopic, getUserHistroy}