import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"
import Header from "./components/Header";
import Body from "./components/Body";

//Title component
//not using key in map is not acceptable. Worst case we can use index
//not using key (not acceptable) <<<<<< index as key <<<<<<< unique id(best practice)


const AppLayout =()=>{
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
};




const root= ReactDOM.createRoot(document.getElementById("root"));


root.render(<AppLayout/>);
