function Greetings( props) {
    
    const translate = (lang) => {
        switch (lang) {
            case 'en':
                return "Hello"
            case 'de':
                return "Hallo"
            case 'es':
                return "Hola"
            case 'fr':
                return "Bonjour"
            default:
                return null
            }
    }
    console.log(translate('de'))


    return ( 
        <>
            <div className="card">
                <p>{translate(props.lang)} {props.children}</p>
            </div>
        </>
     );
}

export default Greetings;