import React, { Component } from 'react';
import { certificateapi } from '../api/createCertificateAPI';
import { courseapi } from '../api/courseAPI'
import '../style.css';




class CreateCertificate extends Component {
    
    state = { 
        firstname:'',
        lastname:'',
        tzId:'',
        dateOfCompletion:'',
        course:'',
        description:'',
        coursedetails:[],
        courseid:''
     }

     async componentDidMount(){
        const data=await courseapi();
        console.log(data);
        this.setState({
            // courseid:this.state.coursedetails._id,
            coursedetails:data,
            courseid:this.state.coursedetails._id
        });
        
     }

     
    handleSubmit =async (e) => {
        
        e.preventDefault();
        const data = {
            firstname:this.state.firstname,
            lastname:this.state.lastname,
            tzId:this.state.tzId,
            dateOfCompletion:this.state.dateOfCompletion,
            course:this.state.course,
            description:this.state.description
        }
        const response= await certificateapi(data);
        
        document.getElementById("form").reset();
    }

    onChange =async (e) => {
        
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSelect =async (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() { 
        const { firstname, lastname, tzId, dateOfCompletion, course, description } = this.state;
        console.log(this.state);

        return ( 
            
            <div className="container form-container">
                <div className="row">
                    <div className="col-lg-5 offset-lg-4 formborder">
                    <form id="form" autoComplete="off" onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label >First Name</label>
                            <input onChange={this.onChange} type="text" name="firstname" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter First Name"/>
                            
                        </div>
                        <div className="form-group">
                            <label >Last Name</label>
                            <input onChange={this.onChange} type="text" name="lastname" className="form-control" id="exampleInputPassword1" placeholder="Enter Last Name"/>
                        </div>
                        <div className="form-group">
                            <label>TzID</label>
                            <input onChange={this.onChange} type="text" name="tzId" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter TzID"/>
                        </div>
                        <div className="form-group">
                            <label >Date of Completion</label>
                            <input onChange={this.onChange} type="date" name="dateOfCompletion" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Date of Completion"/>
                            
                        </div>
                        <div className="form-group">
                            <select class="form-control" onChange={this.handleSelect}  name="course">
                                <option >Select Course</option>
                                {this.state.coursedetails.map((item) => <option  value={item._id}> {item.coursename} </option>)} 
                            </select>    
                         </div>
                        <div className="form-group">
                            <label >Description</label>
                            <textarea onChange={this.onChange} name="description" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Description"/>
                            
                        </div>
                        <button type="submit" className="btn btn-primary form-control">Submit</button>
                    </form>
                    </div>
                </div>

            </div>
            

           
        
         );
    }
}
 
export default CreateCertificate;


