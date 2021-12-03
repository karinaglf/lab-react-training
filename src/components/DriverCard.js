function DriverCard( {name, rating, car, img } ) {

    const getRatingStars = (rating) => {
        return '★'.repeat(Math.round(rating)) + '☆'.repeat(5 - Math.round(rating));
    }

    return ( 
        <div className="driver-card">
        <div className="driver-card-col">
           <img src={img} alt="the driver" />
        </div>
        <div className="id-card-col">
           <h3>{name}</h3>
           <p>{getRatingStars(rating)}</p>
           <p>{car.model} - {car.licensePlate} </p>
       </div>
       </div>
     );
}

export default DriverCard;