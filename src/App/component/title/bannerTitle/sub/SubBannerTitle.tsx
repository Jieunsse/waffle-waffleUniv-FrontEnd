interface SubBannerTitleProps {
  className?: string;
  subBannerTitle: string;
}

export const SubBannerTitle = ({
  className,
  subBannerTitle,
}: SubBannerTitleProps) => {
  return <div className={className}>{subBannerTitle}</div>;
};
