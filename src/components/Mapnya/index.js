import React from 'react'
import { Button } from 'react-bootstrap';

const Mapnya = () => {
    return (
        <div>
            <iframe
                title='map'
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15937.823520364953!2d99.077075!3d2.97092!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMsKwNTgnMTUuMyJOIDk5wrAwNCczNy41IkU!5e0!3m2!1sen!2sus!4v1636286179348!5m2!1sen!2sus"
                height="450"
                width='100%'
                allowfullscreen=""
                loading="lazy">
            </iframe>
            <div style={btn}>
                <Button
                    href="https://www.google.com/maps/place/2%C2%B058'15.3%22N+99%C2%B004'37.5%22E/@2.97092,99.077075,15z?hl=en-GB&gl=US">
                    Klik Disini
                </Button>
            </div>
        </div>
    )
}

export default Mapnya;
const btn = {
    textAlign: 'center'
}
