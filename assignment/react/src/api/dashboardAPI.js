import axios from "axios"; //Axios is used to send http requests
const url="http://192.168.0.158:3000/";

export const dashboardapi = async () => {
    const response=await axios.get(url); //userapi.js recieves entered data and posts it to the given url.
    console.log(response);
    return response.data; //We are returning response ka data back to form.js ka response varibale so that we can see the data that has been transferred
}
