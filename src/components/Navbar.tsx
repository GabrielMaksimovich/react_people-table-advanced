import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

export const Navbar: FC = () => {
  return (
    <nav
      data-cy="nav"
      className="navbar is-fixed-top has-shadow"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavLink
            className={({ isActive }) => cn('navbar-item',
              { 'has-background-grey-lighter': isActive })}
            to="/"
          >
            Home
          </NavLink>

          <NavLink
            className={({ isActive }) => cn('navbar-item',
              { 'has-background-grey-lighter': isActive })}
            to="/people"
          >
            People
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
