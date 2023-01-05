import style from './Main.module.scss';
import { DataInput } from '../DataInput';
import { Chart } from '../Chart';

export const Main = () => {
  return (
    <main className={style.main}>
      <DataInput />
      <Chart />
    </main>
  );
};
