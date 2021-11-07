import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import {
    Photo1, Photo11, Photo15, Photo16, Photo2, Photo20, Photo24, Photo3, Photo5, Photo6
} from '../../assets';


const GambarGambar = () => {
    return (
        <div>
            <Carousel showArrows={true} autoPlay={true} infiniteLoop={true} transitionTime={100}>
                <div>
                    <img src={Photo1} alt='Photo1' />
                </div>
                <div>
                    <img src={Photo2} alt='Photo2' />
                </div>
                <div>
                    <img src={Photo3} alt='Photo3' />
                </div>
                <div>
                    <img src={Photo5} alt='Photo5' />
                </div>
                <div>
                    <img src={Photo6} alt='Photo6' />
                </div>
                <div>
                    <img src={Photo11} alt='Photo11' />
                </div>
                <div>
                    <img src={Photo15} alt='Photo15' />
                </div>
                <div>
                    <img src={Photo16} alt='Photo16' />
                </div>
                <div>
                    <img src={Photo20} alt='Photo20' />
                </div>
                <div>
                    <img src={Photo24} alt='Photo24' />
                </div>
            </Carousel>
        </div>
    )
}
export default GambarGambar;


