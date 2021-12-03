import { Children } from "react";

function Rating( props ) {

    const getRatingStars = (rating) => {
        return '★'.repeat(Math.round(rating)) + '☆'.repeat(5 - Math.round(rating));
    }


    return ( 
        <>
        <p style={{fontSize:"25px"}}>{getRatingStars(props.children)}</p>
        </>
     );
}

export default Rating;