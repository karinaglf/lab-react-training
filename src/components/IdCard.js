function IdCard( {picture, firstName, lastName, gender, height, birth}) {
    return ( 
        <div className="id-card">
         <div className="id-card-col">
            <img src={picture} alt="student" />
         </div>
         <div className="id-card-col">
            <p><strong>First Name: </strong>{firstName}</p>
            <p><strong>Last Name: </strong>{lastName}</p>
            <p><strong>Gender Name: </strong>{gender}</p>
            <p><strong>Height: </strong>{height}</p>
            <p><strong>Birth: </strong>{birth}</p>
        </div>
        </div>
     );
}

export default IdCard;