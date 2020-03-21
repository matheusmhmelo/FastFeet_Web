import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import Modal from '@material-ui/core/Modal';
import { IoMdEye } from 'react-icons/io';

import { NavLink } from 'react-router-dom';

import { Title, Divisor, Signature, SignatureDivisor } from './styles';

export default function DeliveryModal() {
  const signature = require('~/assets/assinatura.png');

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <NavLink to="#" onClick={handleOpen}>
        <IoMdEye size={15} style={{ color: '#8E5BE8' }} />
        <span>Visualizar</span>
      </NavLink>
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            background: '#fff',
            color: '#666666',
            borderRadius: '4px',
            padding: '20px',
            width: '450px',
          }}
        >
          <Divisor>
            <Title>Informaçõesa da encomenda</Title>
            <p>Rua Beethoven, 1729</p>
            <p>Diadema - SP</p>
            <p>09960-580</p>
          </Divisor>
          <Divisor>
            <Title>Informaçõesa da encomenda</Title>
            <p>
              <b>Retirada: </b>25/01/2020
            </p>
            <p>
              <b>Entrega: </b>25/01/2020
            </p>
          </Divisor>
          <Title>Assinatura do destinatário</Title>
          <SignatureDivisor>
            <Signature src={signature} />
          </SignatureDivisor>
        </div>
      </Modal>
    </div>
  );
}
