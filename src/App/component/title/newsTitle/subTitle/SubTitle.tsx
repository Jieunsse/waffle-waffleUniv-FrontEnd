interface SubTitleProps {
  subTitle: string;
  className?: string;
}

export const SubTitle = ({ subTitle, className }: SubTitleProps) => {
  return <div className={className}>{subTitle}</div>;
};
