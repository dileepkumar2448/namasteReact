import { useEffect, useState } from "react";

import { MENU_URL } from "../utils/constants";

const RestroMenu=(resID)=>{

    const [resInfo,setResInfo]=useState(null);
    //fetchdata

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData= async ()=> {
        const data=await fetch(MENU_URL+resID);
        const json=await data.json();
        setResInfo(json.data);

    }

    return resInfo;
}

export default RestroMenu;