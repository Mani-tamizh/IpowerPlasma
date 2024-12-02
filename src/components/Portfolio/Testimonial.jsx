import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './TestimonialSlider.css'; // Ensure this file contains the provided CSS

const TestimonialSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
        ]
    };

    const testimonials = [
        {
            img: 'https://randomuser.me/api/portraits/men/82.jpg',
            text: 'Highly recommend! The quality of the plasma cutting exceeded my expectations, and the customer support was outstanding.',
            name: 'Mark Huff',
            position: 'Businessman'
        },
        {
            img: 'https://randomuser.me/api/portraits/men/81.jpg',
            text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
            name: 'Richard',
            position: 'Businessman'
        },
        {
            img: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=740&t=st=1729065571~exp=1729066171~hmac=9442807dd5e318f1ddb993ff7913facd43a8914387ecf1018768a44f68a760a4',
            text: 'Fantastic service! The plasma cutting was flawless, and the turnaround time was impressive',
            name: 'Rodel Golez',
            position: 'Businessman'
        },
        {
            img: 'https://img.freepik.com/free-photo/portrait-young-happy-man-smiling-against-white-space_58466-12722.jpg?size=626&ext=jpg&ga=GA1.1.1058617071.1704534102&semt=ais_hybrid',
            text: 'Highly recommend! The quality of the plasma cutting exceeded my expectations, and the customer support was outstanding.',
            name: 'Tommy',
            position: 'Businessman'
        }
    ];

    return (
        <div className="testimonials-wrap">
            <div className="container">
                <div className="heading-section">
                    <span className="sub-heading">Testimonials</span>
                    <h2>Happy Clients &amp; Feedbacks</h2>
                </div>
                <Slider {...settings} className="carousel-testimonial">
                    {testimonials.map((testimonial, index) => (
                        <div className="item" key={index}>
                            <div className="testimonial-box d-flex">
                                <div className="user-img" style={{ backgroundImage: `url(${testimonial.img})` }}></div>
                                <div className="text pl-4">
                                    <span className="quote"><i className="fa fa-quote-left"></i></span>
                                    <p>{testimonial.text}</p>
                                    <p className="name">{testimonial.name}</p>
                                    <span className="position">{testimonial.position}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default TestimonialSlider;
