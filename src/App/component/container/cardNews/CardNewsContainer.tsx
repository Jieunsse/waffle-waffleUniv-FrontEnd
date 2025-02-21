import React from 'react';
import cardNewsContainerStyle from './cardNewsContainer.module.css';

interface CardNewsContainerProps {
  children?: React.ReactNode;
}

export const CardNewsContainer = ({ children }: CardNewsContainerProps) => {
  return (
    <div
      className={cardNewsContainerStyle.cardNewsContainer}
      children={children}
    />
  );
};
