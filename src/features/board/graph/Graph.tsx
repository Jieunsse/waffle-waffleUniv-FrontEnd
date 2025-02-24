import graphStyle from './graph.module.css';
import graphImg from '@assets/img/graph/Graph.svg';

export const Graph = () => {
  return <img className={graphStyle.graph} src={graphImg} alt={'graphImg'} />;
};
