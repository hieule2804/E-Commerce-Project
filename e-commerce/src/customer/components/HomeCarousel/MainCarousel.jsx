import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { MainCarouselData } from './MainCarouoselData';




const MainCarousel = () => {
    const items = MainCarouselData.map((item) => <img className='cursor-pointer '
        role='presentation' src={item.image} alt='' />)
    // const navigate = useNavigate
    return (

        < AliceCarousel
            autoPlay
            autoPlayInterval={1500}
            disableButtonsControls
            infinite
            items={items}
        />
    )
};

export default MainCarousel;