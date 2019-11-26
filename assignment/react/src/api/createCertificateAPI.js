import axios from "axios"; //Axios is used to send http requests
const url="http://192.168.0.158:3000/certificate";
const deleteCertificateBaseURL="http://192.168.0.158:3000/deletecertificate";

export const certificateapi = async (data) => {
    const response=await axios.post(url,data); //userapi.js recieves entered data and posts it to the given url.
    console.log(response);
    return response.data; //We are returning response ka data back to form.js ka response varibale so that we can see the data that has been transferred
}

export const deletecertificateapi= async(id) => {
    const deleteCertificateURL=`${deleteCertificateBaseURL}/${id}`;
    const response=await axios.delete(deleteCertificateURL); 
    console.log(response);
    return response.data;
}