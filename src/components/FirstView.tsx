import bacOnsenImage from '../assets/bac-onsen.jpg'
import bacOnsenImage2 from '../assets/bac-onsen2.jpg'
import smoke1Image from '../assets/smoke1.svg'
import smoke2Image from '../assets/smoke2.svg'
import smoke3Image from '../assets/smoke3.svg'
import { useImageSlider } from '../hooks/useImageSlider';

function FirstView() {
  const images = [bacOnsenImage, bacOnsenImage2];
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
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-2000 ${
              i === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>

      <div
        className="absolute writing-vertical right-20 top-[30vh] z-10 text-[32px] text-white font-semibold tracking-[0.2em]">
        <div>
          湯けむりに
        </div>
        <div className="mt-[42px] mr-1">
          癒しと笑顔
        </div>
        <div className="mt-[84px] mr-1">
          ウェルケアで
        </div>
      </div>

      <div className="absolute bottom-12 right-0 left-0 flex flex-col items-center z-10">
        <div className="flex flex-col items-center mb-2">
          <span className="font-noto font-medium text-[10px] text-white tracking-widest">SCROLL</span>
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
      </div>
    </div>
  )
}

export default FirstView 
