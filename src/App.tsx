import { FC } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from './hooks';
import { increment, incrementByAmount, selectCount } from './slices/counter';

import './style.css';

export const App: FC<{ name: string }> = ({ name }) => {
  const selecterCount = useSelector(selectCount);
  const dispatch = useAppDispatch();
  return (
    <div>
      <h1>Hello {name}!</h1>
      <p>Start editing to see some magic happen :) {selecterCount}</p>
      <button onClick={() => dispatch(increment())}>Inc</button>
      <button onClick={() => dispatch(incrementByAmount(2))}>Inc by val</button>
    </div>
  );
};
