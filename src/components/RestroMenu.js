import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestroMenu from '../utils/useRestroMenu'

const RestroMenu=()=>{
    
    const {resID} =useParams();
    const resInfo=useRestroMenu(resID);
    if (resInfo===null) return <Shimmer/>;
    const {name,cuisines,cloudinaryImageId,costForTwoMessage}=resInfo?.cards[0]?.card?.card?.info;
    const {itemCards} =resInfo?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    if (resInfo===null) <Shimmer/>;
    return (
        <div className="menu">
                <h1>{name}</h1>
                <p>{cuisines.join(",")}  {costForTwoMessage}</p>
              
                <h2>
                    Menu
                </h2>
                <ul>
                    {itemCards.map(item =>
                    <li key={item.card.info.id}> {item.card.info.name} -  Rs {
                        item.card.info.defaultPrice/100 || item.card.info.price/100}/-</li>
                    )}
                    
                </ul>
        </div>
    )
}

export default RestroMenu;