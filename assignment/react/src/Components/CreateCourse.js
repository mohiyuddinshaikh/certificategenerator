import React, { Component } from 'react';
import {createcourseapi} from '../api/courseAPI';

class CreateCourse extends Component {


    state = { 
        coursename:'',
        list:'',
        image:[]
     }

     onChange = (e) => {
         this.setState({ [e.target.name]:e.target.value });
         
     }

     onadd = (e) => {
         e.preventDefault();
         this.setState({ image:[...this.state.image,this.state.list] });
     }

   
     handleSubmit =async (e) => {
        
        e.preventDefault();
        const data = {
            coursename:this.state.coursename,
            image:this.state.image
        }
        const response= await createcourseapi(data);
        // document.getElementById("form").reset();

    }

    render() { 
        const { coursename, image } = this.state;
        console.log(this.state)

        return ( 
            <div >
                <div className="container">
                    <div className="row addcourse">
                        <div className="col-lg-5 offset-lg-4">
                            <form id="form" autoComplete="off">
                                <div className="form-group">
                                    <label >Course Name</label>
                                    <input onChange={this.onChange} type="text" name="coursename" className="form-control"  placeholder="Enter Course Name"/>
                                    
                                </div>
                                <div className="form-group">
                                    <label >Class Name</label>
                                    <input onChange={this.onChange} type="text" name="list" className="form-control"  placeholder="Enter fa-icon Class Name"/>
                                    <button className="addbtn btn btn-success" onClick={this.onadd} >Add Class</button>
                                </div>
                                <button onClick={this.handleSubmit} className="btn btn-primary form-control">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default CreateCourse;