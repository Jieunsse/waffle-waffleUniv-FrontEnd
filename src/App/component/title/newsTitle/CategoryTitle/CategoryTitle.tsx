interface CategoryTitleProps {
  CategoryTitle: string;
  className?: string;
}

export const CategoryTitle = ({
  CategoryTitle,
  className,
}: CategoryTitleProps) => {
  return <div className={className}>{CategoryTitle}</div>;
};
