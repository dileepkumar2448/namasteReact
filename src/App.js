import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import "./index.css"
import Header from "./components/Header";
import Body from "./components/Body";
import { RouterProvider, createBrowserRouter,Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestroMenu from "./components/RestroMenu";
//import Grocery from "./components/Grocery";


//Title component
//not using key in map is not acceptable. Worst case we can use index
//not using key (not acceptable) <<<<<< index as key <<<<<<< unique id(best practice)

const Grocery=lazy(()=>
    import("./components/Grocery")
);

const AppLayout =()=>{
    return (
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
    )
};


const appRouter=createBrowserRouter([
    {
        path:'/',
        element:<AppLayout/>,
        errorElement:<Error/>,
        children: [
            {
                path:'/',
                element:<Body/>
            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path:'/grocery',
                element:(<Suspense fallback={<h1>Loading.....</h1>}><Grocery/></Suspense>)
                
            },
            {
                path:'/contact',
                element:<Contact/>
            },
            {
                path:'/restaurants/:resID',
                element:<RestroMenu/>
            }
        ]
},


]);

const root= ReactDOM.createRoot(document.getElementById("root"));


root.render(<RouterProvider router={appRouter}/>);
