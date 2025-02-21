import React from 'react';
import style from './sideBarContainer.module.css';

interface SideBarContainerProps {
  children?: React.ReactNode;
}

export const SideBarContainer = ({ children }: SideBarContainerProps) => {
  return <div children={children} className={style.sideBarContainer}></div>;
};
