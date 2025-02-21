interface FooterTitleProps {
  title: string;
  className: string;
}

export const FooterTitle = ({ title, className }: FooterTitleProps) => {
  return <div className={className}>{title}</div>;
};
