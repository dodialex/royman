import React from 'react';
import { Row } from 'react-bootstrap';
import { Parallax } from "react-parallax";
import { Amplop, Modall } from '..';

const Gambar = () => {

    return (
        <div>
            <Parallax bgImage='https://cdn.pixabay.com/photo/2017/08/06/20/11/wedding-2595862__340.jpg'>
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
