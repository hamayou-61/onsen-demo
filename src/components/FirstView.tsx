import bacOnsenImage1 from '../assets/bac-onsen1.jpg'
import bacOnsenImage2 from '../assets/bac-onsen2.jpg'
import smoke1Image from '../assets/smoke1.svg'
import smoke2Image from '../assets/smoke2.svg'
import smoke3Image from '../assets/smoke3.svg'
import catchTextImage from '../assets/catch.svg'

import { useImageSlider } from '../hooks/useImageSlider';

function FirstView() {
  const images = [bacOnsenImage1, bacOnsenImage2];
  const currentIndex = useImageSlider(images);

  return (
    <div className="relative flex-1 h-screen">
      {/* 背景画像 */}
      <div className="relative h-screen">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`背景${i}`}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-2000 ${
              i === currentIndex ? 'opacity-100 scale-102' : 'opacity-0 scale-100'
            }`}
          />
        ))}
      </div>

      <div
        className="absolute writing-vertical right-22 top-[25vh] w-[170px] z-10 text-[32px] text-white font-semibold tracking-[0.3em]">
        <img src={catchTextImage} alt="湯けむりに癒しと笑顔ウェルケアで" className="w-100" />
      </div>
      <div className="absolute bottom-12 right-0 left-0 flex flex-col items-center z-10">
        <div className="flex flex-col items-center mb-2">
          <span className="font-sans font-medium text-[10px] text-white tracking-widest">SCROLL</span>
        </div>
        <div className="w-0.5 h-8 bg-white"></div>
      </div>

      <div className="smoke-box">
        <p className="smoke-01">
          <img src={smoke1Image} alt=""/>
        </p>
        <p className="smoke-02">
          <img src={smoke2Image} alt=""/>
        </p>
        <p className="smoke-03">
          <img src={smoke1Image} alt=""/>
        </p>
        <p className="smoke-04">
          <img src={smoke2Image} alt=""/>
        </p>
        <p className="smoke-05">
          <img src={smoke3Image} alt=""/>
        </p>
        <p className="smoke-06">
          <img src={smoke3Image} alt=""/>
        </p>
        <p className="smoke-07">
          <img src={smoke3Image} alt=""/>
        </p>
        <p className="smoke-08">
          <img src={smoke2Image} alt=""/>
        </p>
        <p className="smoke-09">
          <img src={smoke1Image} alt=""/>
        </p>
        <p className="smoke-10">
          <img src={smoke3Image} alt=""/>
        </p>
        <p className="smoke-11">
          <img src={smoke2Image} alt=""/>
        </p>
        <p className="smoke-12">
          <img src={smoke3Image} alt=""/>
        </p>

      </div>
    </div>
  )
}

export default FirstView 
