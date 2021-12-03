function Random( {min, max}) {

    const getRandom = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    return ( 
           <div className="card">
                <p>Random value between {min} and {max} => {getRandom(min,max)} </p>
           </div> 
     );
}

export default Random;