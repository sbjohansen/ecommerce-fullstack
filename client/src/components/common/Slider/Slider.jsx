import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import { useState } from 'react';
import { ApiSlides } from '../../../tempAPI/slideAPI';
import './Slider.scss';

const Slider = () => {
  //useState hooks
  const [slides] = useState(ApiSlides);
  const [current, setCurrent] = useState(0);

  //style
  const arrowStyle =
    'rounded-full bg-grey flex justify-center items-center shadow-sm hover:cursor-pointer';

  //functions

  const nextSlide = () => {
    if (current === slides.length - 1) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  };

  const prevSlide = () => {
    if (current === 0) {
      setCurrent(slides.length - 1);
    } else {
      setCurrent(current - 1);
    }
  };

  return (
    <div className="parentDiv h-[540px] bg-[#151515] flex items-center justify-between mobile:hidden">
      {/* left arrow div */}
      <div className={arrowStyle + ' leftArrow'}>
        <ArrowLeftOutlined style={{ fontSize: '50px' }} onClick={prevSlide} />
      </div>
      {/* slide div */}
      {slides.map((slide, index) => {
        if (index === current) {
          return (
            <div
              className={
                'wrapper flex w-[100%] h-[500px] justify-center items-center shadow-xl rounded-lg border-[#c0c0c0] border-10px overflow-hidden relative ' +
                slide.background
              }
            >
              <div className="slide flex items-center justify-center h-[100%]">
                <div className="forImage flex flex-1 justify-center items-center h-[100%]">
                  <img className="h-[100%] object-cover" src={slide.src} alt="spices" />
                </div>
                <div className="des flex flex-col flex-1 place-items-start justify-center ml-11">
                  <h2 className="text-[55px]">{slide.content.h2}</h2>
                  <p className="text-[30px]">{slide.content.p}</p>
                  <button className="btn">Shop Now!</button>
                </div>
              </div>
            </div>
          );
        }
      })}
      {/* right arrow div */}
      <div className={arrowStyle + ' rightArrow'}>
        <ArrowRightOutlined style={{ fontSize: '50px' }} onClick={nextSlide} />
      </div>
    </div>
  );
};

export default Slider;
