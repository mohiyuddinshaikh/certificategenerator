import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './style.css'

class FindCertificate extends Component {
    state = { 
        tzId:""
     }

    handleChange = async (e) => {
        this.setState({ [e.target.name]:e.target.value })
    }

    render() { 
        return ( 
            <div>
                <div className="container-fluid">
                    <div className="row navigation">
                        <h3 className="logo">TechZilla</h3>
                    </div>
                </div>
                   
                
                <div className="container form">
                    <div className="row">
                    
                        <div className="col-lg-6 col-md-3 col-sm-12 offset-lg-4 offset-md-5">
                        <h3 className="headtext"> Validate Your Certificate </h3>
                            <form autoComplete="off">
                                <input  name="tzId" type="text" onChange={this.handleChange} placeholder="TzID"/>
                                <br/>
                                <Link to={`/displaycertificate/${this.state.tzId}`}>
                                    <button className="btn btn-primary" type="submit">Get Certificate</button>
                                </Link>
                            </form>
                        </div>
                        
                    </div>
                </div>
               
            
        
            </div>
         );
    }
}
 
export default FindCertificate;