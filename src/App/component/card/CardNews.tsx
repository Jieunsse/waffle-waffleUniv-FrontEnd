import { ImgContainer } from '@components/container/img/ImgContainer.tsx';
import { MainTitle } from '@components/title/newsTitle/mainTitle/MainTitle.tsx';
import { SubTitle } from '@components/title/newsTitle/subTitle/SubTitle.tsx';

import subTitleStyle from '../title/newsTitle/subTitle/subTitle.module.css';
import titleStyle from '../title/newsTitle/mainTitle/mainTitle.module.css';

interface CardNewsProps {
  className?: string;
  titleText: string;
  subTitle: string;
  src: string;
}

export const CardNews = ({
  className,
  titleText,
  subTitle,
  src,
}: CardNewsProps) => {
  return (
    <div className={className}>
      <ImgContainer src={src} alt={'카드뉴스 이미지'} />
      <MainTitle titleText={titleText} className={titleStyle.mainTitle} />
      <SubTitle subTitle={subTitle} className={subTitleStyle.subTitle} />
    </div>
  );
};
