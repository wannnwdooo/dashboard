import React, { FC } from 'react';
import './Navbar.style.sass';
import { NavLink } from 'react-router-dom';

export const Navbar: FC = () => {
  return (
    <div className="navbarWrapper navbarGrid">
      <div className="topOfNavbar">
        <img src="/assets/image/cube.svg" alt="cube" className="topOfNavIcon" />
        <img
          src="/assets/image/arrow.svg"
          alt="arrow"
          className="topOfNavIcon"
        />
        <nav className="linkContainer">
          <NavLink className="linkItem" to="/">
            Просмотр
          </NavLink>
          <NavLink className="linkItem" to="/control">
            Управление
          </NavLink>
        </nav>
      </div>
      <div className="bottomOfNavbar">
        <div className="projectList navbarGridList">
          <div className="textContainer">
            <h3>Название проекта</h3>
            <p className="abbreviation">Аббревиатура</p>
          </div>
          <img
            src="/assets/image/simpleArrow.svg"
            alt="simpleArrow"
            className="projectListIcon"
          />
        </div>
        <div className="projectTitleContainer">
          <h4 className="projectTitleText">Строительно-монтажные работы</h4>
        </div>
      </div>
    </div>
  );
};
