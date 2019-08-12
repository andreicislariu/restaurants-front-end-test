import React, { Component } from 'react';
import RestaurantsData from '../data/restaurants.json';

class restaurantsList extends Component {
    render() {
        return (
            <div>
            {RestaurantsData.map((restaurantDetail, index) => {
                 return <div>
                    <p>Restaurant Name:</p>
                    <h4>{restaurantDetail.name}</h4>
                    <p>Address:</p>
                    <p>{restaurantDetail.address}</p>
                    <p>Cuisine:</p>
                    <ul>{restaurantDetail.cuisine.map((foodType) => {
                        return <p>{foodType}</p>
                    })}</ul>
                 </div> 
            })}
            </div>
        )
    }
}

export default restaurantsList;