import React from 'react';
// import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import logo from '~/assets/fastfeet-logo.png';
import { Container, Content, Profile } from './styles';

export default function Header() {
  // const profile = useSelector(state => state.user.profile);
  const colorType = '#444444';

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="FastFeet" />
          <NavLink to="/dashboard" activeStyle={{ color: colorType }}>
            DASHBOARD
          </NavLink>
          <NavLink to="/deliverymen" activeStyle={{ color: colorType }}>
            ENTREGADORES
          </NavLink>
          <NavLink to="/recipients" activeStyle={{ color: colorType }}>
            DESTINATÁRIOS
          </NavLink>
          <NavLink to="/problems" activeStyle={{ color: colorType }}>
            PROBLEMAS
          </NavLink>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>Admin FastFeet</strong>
              <NavLink to="/profile">Sair do Sistema</NavLink>
            </div>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
