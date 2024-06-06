import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css/effect-fade';

export function FullScreenSwiper() {
  return (
    <Swiper
      spaceBetween={50}
      effect={'fade'}
      // navigation={true}
      slidesPerView={1}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      style={{
        width: '100vw',
        // maxWidth: '1500px',
        height: '100vh',
        backgroundImage: `url('/img/bg2.png')`, // добавьте свой URL изображения здесь
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
      modules={[Autoplay]}
    >
      <SwiperSlide>
        <img
          style={{ position: 'fixed' }}
          alt="brd"
          className="left-0 bottom-40"
          src="/img/brd.png"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          style={{ position: 'fixed' }}
          alt="brd"
          className=" h-[900] left-0 bottom-0"
          src="/img/cat.png"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          style={{ position: 'fixed' }}
          alt="brd"
          className=" right-0 bottom-0"
          src="/img/gb.png"
        />
      </SwiperSlide>

      {/*...*/}
      <div
        style={{
          color: 'white',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          className="uppercase font-achron"
          style={{
            color: 'white',
            fontSize: '15em',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
            lineHeight: '170px',
          }}
        >
          Vortrius
        </div>
        <div className="w-80 h-20 relative my-6">
          <div className="w-80 h-20 left-0 top-0 absolute justify-center items-center gap-4 inline-flex">
            <div className="text-center text-white text-lg font-semibold font-['Montserrat'] uppercase leading-normal">
              Adventure
            </div>
            <div className="w-14 h-14 -rotate-45 rounded-md border-2 border-white" />
            <div className="text-center text-white text-lg font-semibold font-['Montserrat'] uppercase leading-normal">
              Fighting
            </div>
          </div>
        </div>
        <div style={{ width: '440px' }} className=" text-center size-4">
          We've created an elite gaming ecosystem, designed by gamers for
          gamers, ensuring unmatched experiences and innovation.
        </div>
      </div>
    </Swiper>
  );
}
