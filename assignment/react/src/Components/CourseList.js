import React, { Component } from 'react';
import {courseapi} from '../api/courseAPI';
import {deletecourseapi} from '../api/courseAPI'

class CourseList extends Component {
    state = { 
        coursedetails:[]
     }


     async componentDidMount(){
        const data=await courseapi();
        console.log(data);
        this.setState({
            coursedetails:data
        });
     }

     onDelete =async (id) => {
        const sampledata=await deletecourseapi(id);
        const filteredarray=this.state.coursedetails.filter( (item) => 
                item._id!=id
         )
        this.setState( { 
            coursedetails:filteredarray
         } )
        //  console.log(id);
     }

    render() { 
        return ( 
                    <div>
                        <div className="container">
                            <div className="row coursetable" >
                                <div className="table-responsive">
                                <table className="table">
                                    <thead> 
                                        <tr>
                                            <th>Course Name</th>
                                            <th>Image</th>
                                            <th>Operation</th>
                                        </tr>
                                    </thead>
                                {this.state.coursedetails.map((person,index) => (
                                <tbody>    
                                <tr>
                                    <td> {person.coursename}</td>
                                    <td>{person.image}</td>
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
 
export default CourseList;