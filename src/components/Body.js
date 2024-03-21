import RestaurantCard from "./RestaurantCard";
// import resList from "../utils/mockData"
import "./Body.css"
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body=() => {
    //State variable:- super powerfull variable
    //React hook is just an normal javascript function
    

    const [ListOfRestaurant,setListOfRestaurant]=useState([]);
    const [FilteredRestaurant,setFilteredRestaurant]=useState([]);
    const [searchInput,setSearchInput]=useState("");
    console.log("Body rendered");
   
   

    useEffect(()=>{
        // console.log("useEffect called");
        fetchData();
    },[])
    // console.log("body rendered");
    const fetchData= async ()=>{
        const data=await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        // "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.519639&lng=78.382403&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        // https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.519639&lng=78.382403&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING
        const json_data=await data.json();
        // console.log(json_data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);

        setListOfRestaurant(json_data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json_data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    const onelineStatus=useOnlineStatus();
    console.log(onelineStatus)

     if (onelineStatus === false) {
        return (<h1>Looks like You are offline!!!!. Please check your internet connection</h1>);
    }

    if(ListOfRestaurant.length === 0){
        return <Shimmer/>
        // <h1>Loading the page please wait.....</h1>;
    }
    


   

    return ListOfRestaurant.length === 0 ? <Shimmer/> : (
        <div className="body">
           

        
        <div className="filter">
        <div className="search">
                    <input type="text" className="searchBox" value={searchInput} onChange={(e) =>setSearchInput(e.target.value)}/>
                    <button onClick={()=>{
                        //filter the restaurant cards and update the UI
                        // setSearchInput()

                          
                            filteredRestaurant=ListOfRestaurant.filter((res)=>
                              res.info.name.toLowerCase().includes(searchInput.toLowerCase())
                            );
                            setFilteredRestaurant(filteredRestaurant);

                    }}>search</button>
            </div>
            <button className="filterBtn" onClick={()=>{
                filteredRes =ListOfRestaurant.filter((res)=>res.info.avgRatingString>4.1) ;
                setListOfRestaurant(filteredRes);
                console.log(ListOfRestaurant);
            }}>Top Rated Restaurant</button>
            <button className="filterBtn" onClick={()=>{
                fetchData()
            }}>clear the filter</button>
        </div>

        <div className="Restro-Container">
    

            {
                FilteredRestaurant.map((restaurant) => 
                <Link to={"/restaurants/"+restaurant.info.id} key={restaurant.info.id}>
                <RestaurantCard  
                resData={restaurant}/>
                </Link>
                
                )
            }

            {/* <RestaurantCard resName="DOMINOS" cusinie="pizza"/> */}
        </div>
        </div>
    );
};


export default Body;