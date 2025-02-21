import React from 'react';

interface PopularPostContainerProps {
  children?: React.ReactNode;
}

export const PopularPostContainer = ({
  children,
}: PopularPostContainerProps) => {
  return <div>{children}</div>;
};
