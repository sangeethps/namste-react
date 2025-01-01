import { CDN_URL } from "../utils/constat";

const RestoCards = (props) =>{
    const {resData} = props;
    return (
        <div className="res-card">
            <img alt="res-logo" className="res-logo" 
            src={resData.image}/>
            <h3>{resData.name}</h3>
            <h4>{resData.cuisines}</h4>
            <h4>{resData.rating}</h4>
            <h4>{resData.time}</h4>
        </div>
    )
}

export default RestoCards;