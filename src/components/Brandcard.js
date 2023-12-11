

import Body from "./Body"

        let Brandcard=(props) => {
        console.log(props)
        
       
    
        const image="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"
        const {name,cuisines,costForTwo,deliveryTime,avgRating,cloudinaryImageId}= props.res.info
    
        return(<div className="Brand-con">
            <img className="Brand-logo" src={image+cloudinaryImageId}/>
            <h1>{name}</h1>
            <h2>{cuisines[0]}</h2>
            <h3>{avgRating}</h3>
            <h4>{deliveryTime}</h4>
            <h5>{avgRating}</h5>
        </div>
        )
    }
    

export default Brandcard




/*const RestaurantCard = (props) => {
    console.log(props)
   
     
    let image="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"
    const {name,cuisines,costForTwo,deliveryTime,avgRating,cloudinaryImageId}= props.res.data
 
   
    return (
      <div className="res-con">
        <img
          className="res-logo"
          src={image+cloudinaryImageId}
        />
        <h1>{name}</h1>
        <h2>{cuisines[0]}</h2>
        <h4>{avgRating} rating </h4>
        <h4>{deliveryTime}</h4>
        <h5>{costForTwo}</h5>
      </div>
    );
  };


  export default RestaurantCard*/
