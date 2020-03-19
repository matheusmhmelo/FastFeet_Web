import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Container, Badge, ActionsListSmall, Action } from '../styles';

export default function More({ children }) {
  const [visible, setVisible] = useState(false);

  function handleToggleVisible() {
    setVisible(!visible);
  }

  return (
    <Container>
      <Badge onClick={handleToggleVisible}>
        <button type="button">···</button>
      </Badge>

      <ActionsListSmall visible={visible}>
        <Action>{children}</Action>
      </ActionsListSmall>
    </Container>
  );
}

More.propTypes = {
  children: PropTypes.element.isRequired,
};
