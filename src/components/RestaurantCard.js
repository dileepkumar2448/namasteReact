import {CDN_URL} from "../utils/constants"


const RestaurantCard=(props) =>{
    const {resData} = props;
    const {cloudinaryImageId,name,cuisines,avgRating}=resData?.info;
    
 return (
    <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
        <img alt="res-logo" src={
        CDN_URL+
        cloudinaryImageId
        }/>
        <h3>{name}</h3>
        <h4>{cuisines.slice(0,3).join(",")}</h4>
        {/* <h4>{costForTwo / 100} for TWO</h4> */}
        <h4>{avgRating}</h4>
        <span>{resData.info.sla.deliveryTime} minutes</span>
    </div>
 )   
}



export default RestaurantCard;