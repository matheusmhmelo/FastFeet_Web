import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import Modal from '@material-ui/core/Modal';
import { IoMdEye } from 'react-icons/io';

import { NavLink } from 'react-router-dom';

import { Title, Content } from './styles';

export default function ProblemsModal() {
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
            maxWidth: '450px',
          }}
        >
          <Title>Transition modal</Title>
          <Content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in
            mauris et felis eleifend elementum vel quis lectus. Vivamus dapibus
            nisi augue, vitae ultrices ligula elementum at. Proin ut metus in mi
            tincidunt vestibulum a a felis. Aenean dictum libero eu urna
            tristique vestibulum. Fusce feugiat justo et augue facilisis, sit
            amet ornare eros consequat. Suspendisse semper risus feugiat nisl
            commodo, sed mollis neque auctor. Nullam eu fringilla lectus.
            Phasellus sed sapien sed turpis imperdiet maximus. Aenean ante
            nulla, bibendum non facilisis at, facilisis eget ex. In ut quam et
            tellus aliquet tincidunt.
          </Content>
        </div>
      </Modal>
    </div>
  );
}
