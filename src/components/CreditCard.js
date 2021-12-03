import visa from '../assets/images/visa.png'
import mastercard from '../assets/images/master-card.svg'

function CreditCard( props ) {
    const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = props
    
    const hideCardNumber = (number) => {
        return number.replace(/\d(?=\d{4})/g, "•")
    }

    return ( 
        <div className="credit-card-row">
            <div className="credit-card" style={{backgroundColor:bgColor}}>
            {type === "Visa" ?
             <img className="card-logo" src={visa} alt="Visa" /> :
             <img className="card-logo" src={mastercard} alt="mastercard" />}
                <h3>{hideCardNumber(number)}</h3>
                <p>Expires {expirationMonth}/{expirationYear} {bank}</p>
                <p>{owner}</p>
            </div>
        </div>
     );

}

export default CreditCard;