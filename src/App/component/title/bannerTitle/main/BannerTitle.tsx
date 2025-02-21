interface BannerTitleProps {
  className?: string;
  firstTitle: string;
  secondTitle: string;
  thirdTitle: string;
  firstName: string;
  secondName: string;
  thirdName: string;
}

export const BannerTitle = ({
  className,
  firstTitle,
  secondTitle,
  thirdTitle,
  firstName,
  secondName,
  thirdName,
}: BannerTitleProps) => {
  return (
    <div className={className}>
      <div className={firstName}>{firstTitle}</div>
      <div className={secondName}>{secondTitle}</div>
      <div className={thirdName}>{thirdTitle}</div>
    </div>
  );
};
