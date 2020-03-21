import styled from 'styled-components';
import { lighten } from 'polished';

const handleColor = color => {
  switch (color) {
    case 'entregue':
      return '#2ca42b';
    case 'pendente':
      return '#C1BC35';
    case 'retirada':
      return '#4D85EE';
    case 'cancelada':
    default:
      return '#DE3B3B';
  }
};

export const Container = styled.div`
  flex: 1;
  margin: 40px auto 40px auto;
  max-width: 1150px;
`;

export const DeliverymanItem = styled.td`
  div {
    display: flex;

    span {
      margin-top: 10px;
      margin-left: 5px;
    }

    .avatar {
      background-color: ${lighten(0.2, '#7d40e7')};
      color: #7d40e7;
    }
  }
`;

export const DeliveryStatus = styled.td`
  div {
    display: flex;
    align-content: center;

    border-radius: 20px;
    color: ${props => handleColor(props.status)};
    background-color: ${props =>
      lighten(
        props.status === 'entregue' || props.status === 'pendente' ? 0.4 : 0.2,
        handleColor(props.status)
      )};

    span {
      margin-top: 12px;
      font-size: 14px;
      font-weight: bold;
    }
  }
`;
