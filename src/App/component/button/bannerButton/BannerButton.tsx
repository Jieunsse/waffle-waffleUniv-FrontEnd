interface BannerButtonProps {
  className?: string;
  src?: string;
  alt: string;
}

export const BannerButton = ({ className, src, alt }: BannerButtonProps) => {
  return <img src={src} alt={alt} className={className} />;
};
