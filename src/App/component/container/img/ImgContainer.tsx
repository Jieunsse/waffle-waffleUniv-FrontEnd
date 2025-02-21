import imgStyle from './imgConatiner.module.css';

interface ImgContainerProps {
  src?: string;
  alt?: string;
}

export const ImgContainer = ({ src, alt }: ImgContainerProps) => {
  return <img src={src} alt={alt} className={imgStyle.container} />;
};
