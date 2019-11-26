import React from 'react';
import AddCourseMain from './Components/AddCourseMain';
import CreateCertificate from './Components/CreateCertificate';
import Dashboard from './Components/Dashboard';
import Menu from './Components/Menu';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './style.css';


function AdminHomePage() {
  return (
            <BrowserRouter>
                <Menu />
                    <Switch>
                        <Route path="/" exact component={Dashboard} />
                        <Route path="/createcertificate" component={CreateCertificate} />
                        <Route path="/createcourse" component={AddCourseMain} />
                    </Switch>
            </BrowserRouter>
  );
}

export default AdminHomePage;
