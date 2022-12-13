import React from "react";
import {BrowserRouter,Routes, Route } from "react-router-dom";
import Home from "./compnents/Home";
import TodayPlan from "./compnents/TodayPlan/TodayPlan";
import Calculator from "./compnents/Calculator";
import Navbar from "./compnents/Navbar";
import Index  from "./compnents/User/index";



function App(){
    return (
        <>
        
         <BrowserRouter>
         <Navbar/>
         <Routes>
         
            <Route exact  path="/"  element={<Home/>} />
            <Route exact path="/today-plans" element={<TodayPlan/>}/>
            <Route  path="/calculator" element={<Calculator/>} />
            <Route path="/user/index" element={<Index/>}/>
            <Route path="/edit-user/"

            </Routes>
            </BrowserRouter> 
        </>
    )
}




// let el = <h1>Hello World </h1>;

// class App extends Component{
//     render(){
//         return (
//         <Fragment>
//         {/* React.createElement("h1",null , "nothing") */}
//         <h1>Hello World </h1>
//         </Fragment>
//         );
//     }
// }
// let em = React.createElement("h1",null , "nothing");

export default App ;
