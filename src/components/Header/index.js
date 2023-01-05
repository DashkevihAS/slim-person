import style from './Header.module.scss';

export const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.imgWrapper}>
        <img src='./pig.png' alt='логотип свинка' />
      </div>
      <h1 className={style.title}>Худеем ТОЧНО</h1>
    </header>
  );
};
