import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import FindCertificate from './findCertificate';
import Certificate from './certificate';

class CertificateRoute extends Component {
    
    state = {  }


    render() { 

        return ( 
            <div>
                <BrowserRouter>
                    <Route path="/" exact component={FindCertificate} />
                    <Route path="/displaycertificate/:id"  component={Certificate} />
                </BrowserRouter>
            </div>
         );

    }
}
 
export default CertificateRoute;

