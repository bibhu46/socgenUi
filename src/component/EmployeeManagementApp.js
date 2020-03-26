import React, { Component } from 'react'
import ListOfEmployee from './ListOfEmployees';
import AddEmployee from './AddEmployee';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


class EmployeeManagementApp extends Component{
    
    render(){
        return(
            <Router>
                <>
                <h1 style={{backgroundColor: "#ffc107"}}>Welcome to EMPLOYEE portal</h1>
                <Switch>
                   <Route path="/" exact component={ListOfEmployee} />
                    <Route path="/addEmp" exact component={AddEmployee} />
                </Switch>
                </> 
            </Router>
        )
    }
}export default EmployeeManagementApp