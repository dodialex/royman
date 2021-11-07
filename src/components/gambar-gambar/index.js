import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import {
    Photo1, Photo2, Photo3, Photo4, Photo5, Photo6, Photo7, Photo8, Photo9, Photo10,
    Photo11, Photo12, Photo13, Photo14, Photo15, Photo16, Photo17, Photo18, Photo19, Photo20,
    Photo21, Photo22, Photo23, Photo24, Photo25
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
                    <img src={Photo4} alt='Photo4' />
                </div>
                <div>
                    <img src={Photo5} alt='Photo5' />
                </div>
                <div>
                    <img src={Photo6} alt='Photo6' />
                </div>
                <div>
                    <img src={Photo7} alt='Photo7' />
                </div>
                <div>
                    <img src={Photo8} alt='Photo8' />
                </div>
                <div>
                    <img src={Photo9} alt='Photo9' />
                </div>
                <div>
                    <img src={Photo10} alt='Photo10' />
                </div>
                <div>
                    <img src={Photo11} alt='Photo11' />
                </div>
                <div>
                    <img src={Photo12} alt='Photo12' />
                </div>
                <div>
                    <img src={Photo13} alt='Photo13' />
                </div>
                <div>
                    <img src={Photo14} alt='Photo14' />
                </div>
                <div>
                    <img src={Photo15} alt='Photo15' />
                </div>
                <div>
                    <img src={Photo16} alt='Photo16' />
                </div>
                <div>
                    <img src={Photo17} alt='Photo17' />
                </div>
                <div>
                    <img src={Photo18} alt='Photo18' />
                </div>
                <div>
                    <img src={Photo19} alt='Photo19' />
                </div>
                <div>
                    <img src={Photo20} alt='Photo20' />
                </div>
                <div>
                    <img src={Photo21} alt='Photo21' />
                </div>
                <div>
                    <img src={Photo22} alt='Photo22' />
                </div>
                <div>
                    <img src={Photo23} alt='Photo23' />
                </div>
                <div>
                    <img src={Photo24} alt='Photo24' />
                </div>
                <div>
                    <img src={Photo25} alt='Photo25' />
                </div>

            </Carousel>
        </div>
    )
}
export default GambarGambar;


