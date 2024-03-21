import { useRouteError } from "react-router-dom";

const Error =() =>{
    const err=useRouteError();
    console.log(err)
    return (
        <div>
            <h1>Ooooooooooops </h1>
            <h2>something went wrong. please see the below error message</h2>
            <h3>{err.status}: {err.statusText}</h3>
        </div>
    )
}

export default Error;