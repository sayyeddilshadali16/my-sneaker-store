import React from 'react';
import SimpleImageSlider from 'react-simple-image-slider';
import image1 from '../Assets/slider-img-1.jpg';
import image2 from '../Assets/slider-img-2.jpg';
import image3 from '../Assets/slider-img-3.jpg';
import image4 from '../Assets/slider-img-4.jpg';


const images = [
    { url: image1 },
    { url: image2 },
    { url: image3 },
    { url: image4 },
    
  ];

const Slider = () => {
  return (
    <div className='slider-container'>
        <SimpleImageSlider
        width={1519}
        height={589}
        images={images}
        showBullets={true}
        showNavs={true}
      />
    </div>
  )
}

export default Slider