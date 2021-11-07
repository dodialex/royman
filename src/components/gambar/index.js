import React from 'react';
import { Row } from 'react-bootstrap';
import { Parallax } from "react-parallax";
import { Amplop, Modall } from '..';
import { GambarA } from '../../assets';

const Gambar = () => {

    return (
        <div>
            <Parallax bgImage={GambarA}>
                <div style={{ height: '200%' }}>
                    <div style={{ paddingBottom: '21%', marginTop: '-20px' }}>
                        <Amplop />
                        <Row style={{ marginTop: '-90px' }}>
                            <Modall />
                        </Row>
                    </div>
                </div>
            </Parallax>
        </div>
    )
}

export default Gambar
