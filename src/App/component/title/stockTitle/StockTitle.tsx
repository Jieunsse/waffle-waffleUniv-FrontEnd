interface StockTitleProps {
  stockTitle: string;
  className: string;
}

export const StockTitle = ({ stockTitle, className }: StockTitleProps) => {
  return <div className={className}>{stockTitle}</div>;
};
