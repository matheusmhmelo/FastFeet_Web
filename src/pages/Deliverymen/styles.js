import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  flex: 1;
  margin: 40px 120px;

  h1 {
    color: #444444;
  }

  .avatar {
    background-color: ${lighten(0.2, '#7d40e7')};
    color: #7d40e7;
  }
`;
