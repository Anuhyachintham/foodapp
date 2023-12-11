import { useEffect, useState } from "react";
import Brandcard from "./Brandcard";


const Body=()=>{
    const [brandList,setBrandList]= useState([{
        info: {    
             id : "334475",
             name: "paradise",
             cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
             cuisines : ["Burgers","Biryani", "American", "Snacks"],
             costForTwo: 40000,
             deliveryTime : 36,
             avgRating : "3.8"
         }
     },
     {
         info: {    
             id : "334476",
             name: "Eat panchavat",
             cloudinaryImageId: "85ccae4e3576f9330af102c46ca85395",
             cuisines : ["Burgers","Biryani", "American", "Snacks"],
             costForTwo: 40000,
             deliveryTime : 20,
             avgRating : "4.3"
         }
     },
     {
         info: {    
             id : "334477",
             name: "Dominos",
             cloudinaryImageId: "uughlfbnykdtvefbmhdm",
             cuisines : ["Burgers","Biryani", "American", "Snacks"],
             costForTwo: 40000,
             deliveryTime : 40,
             avgRating : "4.4"
         }
     },
     {
         info: {    
             id : "334478",
             name: "kritunga",
             cloudinaryImageId: "uughlfbnykdtvefbmhdm",
             cuisines : ["Burgers","Biryani", "American", "Snacks"],
             costForTwo: 40000,
             deliveryTime : 40,
             avgRating : "3.9"
         }
     },
     {
         info: {    
             id : "334479",
             name: "Suprabhat",
             cloudinaryImageId: "uughlfbnykdtvefbmhdm",
             cuisines : ["Burgers","Biryani", "American", "Snacks"],
             costForTwo: 40000,
             deliveryTime : 40,
             avgRating : "3.5"
         }
     }
    ])

    useEffect(()=>{
        
        const fetchData=async()=>{
            const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=14.4048122&lng=79.9570411&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
                const res_data= await response.json()
                
    
                console.log(res_data);
                setBrandList(res_data.data.cards[2].card.card.gridElements.infoWithStyle.restaurants) // 20
                   //console.log(res_data.data.cards[2].card.card.gridElements.infoWithStyle.restaurants)
        
    }
    fetchData()
},
    [])


const filterdData=()=>{
const fildata= brandList.filter(each=>each.info.avgRating>4.3);
console.log(fildata);
}
    
    
    return(<div>
    <div> </div><button onclick={filterdData}>Top rated restaurants

    </button>
    <div className="Body-container">
        {
            brandList.map((each)=><Brandcard key={each.info.id} res={each}/>)
            }


    </div>
    </div>
    );
    };

export default Body