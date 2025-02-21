import { useNavigate } from 'react-router-dom';
import { BannerButton } from '@components/button/bannerButton/BannerButton.tsx';
import leftBannerButton from '@assets/img/bannerButton/leftBannerButton.svg';
import rightBannerButton from '@assets/img/bannerButton/rightBannerButton.svg';
import bannerButtonStyle from '@components/button/bannerButton/bannerButton.module.css';
import bannerStyle from '@components/banner/banner.module.css';
import { SubBannerTitle } from '@components/title/bannerTitle/sub/SubBannerTitle.tsx';
import subBannerStyle from '@components/title/bannerTitle/sub/subBannerTitle.module.css';
import { BannerTitle } from '@components/title/bannerTitle/main/BannerTitle.tsx';
import BannerTitleStyle from '@components/title/bannerTitle/main/bannerTitle.module.css';

interface BannerProps {
  bannerClassName?: string;
  imgClassName?: string;
  leftButtonClassName?: string;
  rightButtonClassName?: string;
  src?: string;
}

export const Banner = ({ imgClassName, src, bannerClassName }: BannerProps) => {
  const navigate = useNavigate();
  return (
    <div className={bannerClassName}>
      <img
        src={src}
        alt="배너 이미지"
        className={imgClassName}
        onClick={() => navigate('/')}
      />
      <BannerTitle
        className={BannerTitleStyle.mainTitle}
        firstTitle={'누구보다 빠른 주식 정보'}
        secondTitle={'Go stock에서 만나보기'}
        thirdTitle={'어려웠던 주식 정보를 지금 바로 고스톡에서 만나보세요!'}
        firstName={BannerTitleStyle.firstName}
        secondName={BannerTitleStyle.secondName}
        thirdName={BannerTitleStyle.thirdName}
      />
      <BannerButton
        src={leftBannerButton}
        alt={'왼쪽 버튼'}
        className={bannerButtonStyle.leftButton}
      />
      <BannerButton
        src={rightBannerButton}
        alt={'오른쪽 버튼'}
        className={bannerButtonStyle.rightButton}
      />
      <div className={bannerStyle.bannerBlock}>
        <SubBannerTitle
          className={subBannerStyle.subBannerTitle}
          subBannerTitle={
            "韓경제 수출·고용 '한파'… 내수 불씨 살리려 정책 총동원"
          }
        />
      </div>
    </div>
  );
};
