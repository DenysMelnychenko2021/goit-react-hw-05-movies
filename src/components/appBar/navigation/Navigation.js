import { NavLink } from 'react-router-dom';

import s from './Navigation.module.css';

export const Navigation = () => {
  return (
    <nav className={s.nav}>
      <NavLink exact to="/" className={s.link} activeClassName={s.activeLink}>
        Главная
      </NavLink>
      <NavLink to="/movies" className={s.link} activeClassName={s.activeLink}>
        Фильмы
      </NavLink>
    </nav>
  );
};
