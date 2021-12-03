import { useState } from "react";

function LikeButton( props ) {
    const [likes, setLikes] = useState(0)

    const addLikes = (event) => {
        setLikes(likes + 1);
    }

    return ( 
        <button className="like-button" onClick={() => {addLikes()}}>{likes} Likes</button>
     );
}

export default LikeButton;