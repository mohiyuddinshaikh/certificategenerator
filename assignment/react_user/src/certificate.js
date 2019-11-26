import React, { Component } from 'react';
import {certificatedetailsapi} from './api/certificatedetailsapi';
import {getcoursename1} from './api/certificatedetailsapi';
const moment=require ("moment");

class Certificate extends Component {
    
    state = { 
        userdetail:undefined,
        courseinfo:''
     }


    async componentDidMount(){
        const id=this.props.match.params.id;
        const response= await certificatedetailsapi(id); 
        
        console.log(response);
        
        this.setState({ userdetail:response });
       
    }

    render() { 
        console.log(this.state);
        // console.log(moment(this.state.userdetail.dateOfCompletion).format("MMMM Do YYYY"));
        return ( 
            <div className="cerbody">
                <div className="container-fluid">
                    <div className="row navigation">
                        <h3 className="logo">TechZilla</h3>
                    </div>
                </div>

                {this.state.userdetail!=undefined ? 
                 <div className="container cert">  
                 <div align="center" className="cernumber">Certificate No.  {this.state.userdetail.tzId} </div> 
                    <div className="certbody">
                    <h2 align="center">Certificate of Completion</h2> <br/>
                    <p align="center">This is to certify that {this.state.userdetail.firstname} {this.state.userdetail.lastname} has succesfully 
                    completed 4 months of '{this.state.userdetail.course.coursename}' course on {moment(this.state.userdetail.dateOfCompletion).format("MMMM D, YYYY")}</p>
                    <br/>
                    <h3 align="center">Course Content</h3>
                    <br/>
                    <p align="center">    {this.state.userdetail.description}    </p>
                    <p align="center" className="icons">{this.state.userdetail.course.image.map((item) => <i style={{marginRight:25}} class={item}></i> )}</p>
                    <p align="center" className="copyright">&#169; 2019 UpSkill by Techzilla India</p>
                    </div>
                </div> : null }
            </div>
           
            
         );
    }
}
 
export default Certificate;