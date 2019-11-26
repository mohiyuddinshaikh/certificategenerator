import axios from "axios"; //Axios is used to send http requests
const url="http://192.168.0.158:3000/courselist";
const createCourseURL="http://192.168.0.158:3000/createcourse";
const deleteCourseBaseURL="http://192.168.0.158:3000/deletecourse";

export const courseapi = async () => {
    const response=await axios.get(url); 
    console.log(response);
    return response.data; //We are returning response ka data back to form.js ka response varibale so that we can see the data that has been transferred
}

export const createcourseapi= async(data) => {
    const response=await axios.post(createCourseURL,data); 
    console.log(response);
    return response.data;
}

export const deletecourseapi= async(id) => {
    const deleteCourseURL=`${deleteCourseBaseURL}/${id}`;
    const response=await axios.delete(deleteCourseURL); 
    console.log(response);
    return response.data;
}


