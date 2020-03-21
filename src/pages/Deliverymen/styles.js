import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  flex: 1;
  margin: 40px auto 40px auto;
  max-width: 1150px;

  .avatar {
    background-color: ${lighten(0.2, '#7d40e7')};
    color: #7d40e7;
  }
`;
