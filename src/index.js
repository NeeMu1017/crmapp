import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CustomerFrom } from './componts/CustomerFrom/CustomerFrom';
import { CustomerList } from './componts/CustomerList/CustomerList';
import Singup from './componts/SingUp/Singup';
import Signin from './componts/singin/Signin';
import SecureRouters from './componts/SecureRouter/SecureRouters';
import Users from './componts/Users/Users';
import UserForm from './componts/Userfrom/UserForm';
import Ticket from './componts/ticket/Ticket';
import Ticketform from './componts/ticket/Ticketform';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <SecureRouters>
            <CustomerList/>
          </SecureRouters>}> </Route>
        <Route path='/singup' element={<Singup />}> </Route>
        <Route path='/signin' element={<Signin />}> </Route>
        <Route path='/form' element={
          <SecureRouters>
            <CustomerFrom /></SecureRouters>}> </Route>
        <Route path='/form/:customerName' element={<CustomerFrom />}> </Route>
        <Route path='/users' element={<Users />}></Route>
        <Route path='/userform' element={<UserForm />}></Route>          
        <Route path='/ticket' element={<Ticket/>}></Route>          
        <Route path='/ticketform' element={<Ticketform/>}></Route>          
        <Route path='/ticketform/:desc' element={<Ticketform/>}></Route>          
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
