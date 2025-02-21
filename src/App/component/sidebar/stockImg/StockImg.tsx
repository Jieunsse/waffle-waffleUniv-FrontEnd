interface StockImgProps {
  src: string;
  alt: string;
  className: string;
}

export const StockImg = ({ src, alt, className }: StockImgProps) => {
  return <img src={src} alt={alt} className={className} />;
};
