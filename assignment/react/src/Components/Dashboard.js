import React, { Component } from 'react';
import {dashboardapi} from '../api/dashboardAPI';
import {courseapi} from '../api/courseAPI'; //for calculating number of courses available
import {deletecertificateapi} from '../api/createCertificateAPI';
import '../style.css';

class Dashboard extends Component {

    state = { 

            details : [],
            courselist : []
    }

     async componentDidMount(){
        const coursedata=await courseapi();
        const data=await dashboardapi();
        console.log(data);
        this.setState({
            details:data,
            courselist: coursedata
        });
     }

     onDelete = async (id) => {
        const sampledata=await deletecertificateapi(id);
        const filteredarray=this.state.details.filter( (item) => 
                item._id!=id
         )
        this.setState( { 
            details:filteredarray
         } )
     }


    render() { 
        console.log(this.state);
        console.log(this.state.details)
        return ( 
                <div>
                    <div className="container">
                        <div className="row disprow">
                            <div className="col-lg-4 offset-lg-2 text-center">
                            <h3 className="disptext">Total Certificates : {this.state.details.length}</h3>
                            </div>
                            <div className="col-lg-4 text-center">
                            <h3 className="disptext">Total Courses : {this.state.courselist.length}</h3>
                            </div>
                            
                            
                        </div>
                    </div>
                <div className="container">
                    <div className="row check">
                        
                            
                        <div className="table-responsive "  >
                        <table className="table" >
                                <thead>
                                <tr >
                                    <th scope="col">First Name</th>
                                    <th scope="col">Last Name</th>
                                    <th scope="col">TzID</th>
                                    <th scope="col">Course</th>
                                    <th scope="col">Date of Completion</th>
                                    
                                   
                                    <th scope="col">Operation</th>
                                </tr>
                                </thead>
                                
                                                {this.state.details.map((person,index) => (
                                       <tbody>
                                       <tr>
                                            <td> {person.firstname}</td>
                                            <td>{person.lastname}</td>
                                            <td>{person.tzId}</td>
                                            <td> {person.course.coursename}</td>
                                            <td> {person.dateOfCompletion}</td>
                                            
                                           
                                            <td><button className="btn" onClick={ ()=>this.onDelete(person._id) }>Delete</button></td>
                                            </tr>
                                            </tbody>
                                        ))
                                            } 
                            </table>
                        </div>
                                
                        
                    </div>
                 </div>
            </div>     
                
            );
    }
}
 
export default Dashboard;

// const Dashboard = () => {
//     return (
//         <div>
//             <br/>
//             <h2>This is Dashboard Page</h2>
//             <br/>
//             <table>
//                 <tr>
//                     <th>Company</th>
//                     <th>Contact</th>
//                     <th>Country</th>
//                 </tr>
//                 <tr>
//                     <td>Alfreds Futterkiste</td>
//                     <td>Maria Anders</td>
//                     <td>Germany</td>
//                 </tr>
//             </table>    
//         </div>
//     )
// }

// export default Dashboard;