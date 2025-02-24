interface graphTitleProps {
  className?: string;
  title: string;
}

export const GraphTitle = ({ className, title }: graphTitleProps) => {
  return <div className={className}>{title}</div>;
};
