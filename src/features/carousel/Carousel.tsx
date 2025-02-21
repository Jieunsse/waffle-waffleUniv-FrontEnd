import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Banner } from '@components/banner/Banner.tsx';
import BannerStyles from '@components/banner/banner.module.css';
import BannerImg from '@assets/img/banner/banner.svg';

export const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    autoplay: false,
    autoplaySpeed: 5000,
    draggable: false,
    fade: false,
    vertical: false,
    initialSlide: 1,
    pauseOnFocus: true,
    pauseOnHover: true,
  };

  return (
    <Slider {...settings}>
      <div>
        <h3>
          <Banner imgClassName={BannerStyles.banner} src={BannerImg} />
        </h3>
      </div>
      <div>
        <h3>
          <Banner imgClassName={BannerStyles.banner} src={BannerImg} />
        </h3>
      </div>
      <div>
        <h3>
          <Banner imgClassName={BannerStyles.banner} src={BannerImg} />
        </h3>
      </div>
    </Slider>
  );
};
