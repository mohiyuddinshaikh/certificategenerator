import axios from "axios"; //Axios is used to send http requests
const baseurl="http://192.168.0.158:3000/displaycertificate";
const getcourseurl="http://192.168.0.158:3000/getcourse"

export const certificatedetailsapi = async (data) => {
    const url=`${baseurl}/${data}`
    const response=await axios.get(url); //userapi.js recieves entered data and posts it to the given url.
    console.log(response);
    return response.data; //We are returning response ka data back to form.js ka response varibale so that we can see the data that has been transferred
}

export const getcoursename1 = async (data) => {
    const url=`${getcourseurl}/${data}`
    const response=await axios.get(url); //userapi.js recieves entered data and posts it to the given url.
    console.log(response);
    return response.data; //We are returning response ka data back to form.js ka response varibale so that we can see the data that has been transferred
}