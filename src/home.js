import React from 'react';
import {BrowserRouter,
    Route,
    Switch,
    NavLink} from "react-router-dom";
    import Login from './component/login';
    import HeaderComponent from './component/headerComponent';
    import UserComponent from './component/userComponent';
    import LoginComponent from './component/loginComponent';
    import NotFound from './component/notFound';
    import ExportPdfComponent from './component/pdfComponent';
    export default function home(){
    return(
        <>
        <div>
            
            <BrowserRouter>
            <HeaderComponent/>
            <NavLink to="/view"></NavLink>
            <NavLink to="/add"></NavLink>
            <NavLink to="/ExportPdf"></NavLink>
            <Switch>
                <Route exact path="/" component={Login}/>
                <Route exact path="/view" component={UserComponent}/>
                <Route exact path="/add" component={LoginComponent}/>
                <Route exact path="/ExportPdf" component={ExportPdfComponent}/>
                <Route path="*" component={NotFound}/>   
            </Switch>
            </BrowserRouter>
        </div>
        </>
    )
}