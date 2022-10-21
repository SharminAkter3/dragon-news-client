import React from 'react';
import Carousel from 'react-bootstrap/Carousel';


const BrandCarousel = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://as2.ftcdn.net/v2/jpg/04/19/26/97/1000_F_419269782_9LsP3TQndMVnZ2j3ZhTPhMjaqQpFAth9.jpg"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://as2.ftcdn.net/v2/jpg/03/08/69/75/1000_F_308697506_9dsBYHXm9FwuW0qcEqimAEXUvzTwfzwe.jpg"
                    alt="Second slide"
                />
            </Carousel.Item>
        </Carousel>
    );
};

export default BrandCarousel;