import styles from './sideBarTitle.module.css';

interface SideBarTitleProps {
  title: string;
}

export const SideBarTitle = ({ title }: SideBarTitleProps) => {
  return <div className={styles.sideBarTitle}>{title}</div>;
};
