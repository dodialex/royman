import React from 'react'

const Mapnya = () => {
    return (
        <div style={div}>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15937.823520364953!2d99.077075!3d2.97092!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMsKwNTgnMTUuMyJOIDk5wrAwNCczNy41IkU!5e0!3m2!1sen!2sus!4v1636286179348!5m2!1sen!2sus"
                height="450"
                width='100%'
                allowfullscreen=""
                loading="lazy">
            </iframe>
        </div>
    )
}

export default Mapnya;
const div = {
    height: '100px'
}
