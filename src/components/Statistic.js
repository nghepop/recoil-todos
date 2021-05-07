import React from 'react';
import { useRecoilValue } from 'recoil';
import { todoListCount } from '../selector';

const Statistic = () => {
  const count = useRecoilValue(todoListCount);
  return (<p>Statistic: { count }</p>);
}

export default Statistic;
