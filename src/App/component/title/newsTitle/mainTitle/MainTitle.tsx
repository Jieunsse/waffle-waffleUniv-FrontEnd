interface NewsTitleProps {
  className?: string;
  titleText: string;
}

export const MainTitle = ({ className, titleText }: NewsTitleProps) => {
  return <div className={className}>{titleText}</div>;
};
