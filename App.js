import React from "react";
import ReactDOM from "react-dom/client";


const Header = ()=>{
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://i.pinimg.com/originals/b1/fc/bb/b1fcbbfd4fb8116c714ef352bb39bbaf.jpg"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestoCards = (props) =>{
    const {resData} = props;
    return (
        <div className="res-card">
            <img alt="res-logo" className="res-logo" 
            src="https://b.zmtcdn.com/data/pictures/4/20147354/a32f5869b6d9b47c9fda4af9745fd3c9_o2_featured_v2.jpg?output-format=webp"/>
            <h3>resData.name</h3>
            <h4>resData.cuisines</h4>
            <h4>resData.rating</h4>
            <h4>resData.time</h4>
        </div>
    )
}

const resList = [];

const Body = () => {
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {
                    resList.map((restaurent) => (
                        <RestoCards resData={restaurent}/>
                    ))
                }
            </div>
        </div>
    )
}

const AppLayout = ()=>{
    return (
        <div className="app">
             <Header/>
             <Body/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout />);
