/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import { FaPlus, FaPen } from 'react-icons/fa';
import { GoPrimitiveDot } from 'react-icons/go';
import { MdDeleteForever } from 'react-icons/md';

import { NavLink } from 'react-router-dom';

import Avatar from '@material-ui/core/Avatar';

import DeliveryModal from './Modal';

import { Container, DeliverymanItem, DeliveryStatus } from './styles';
import { TableDeliveries, TableHeader, Table } from '~/styles/tables.js';
import { PageTitle, Header, NewContent } from '~/styles/pageHeader.js';

import More from '~/components/More/Big';
import history from '~/services/history';
import api from '~/services/api';

export default function Deliveries() {
  const [deliveries, setDeliveries] = useState([]);

  function handleDeliveryes(allDeliveries) {
    const deliveriesMaped = allDeliveries.map(data => {
      if (data.end_date) {
        data.status = 'entregue';
      }
      if (data.canceled_at) {
        data.status = 'cancelada';
      }
      if (data.start_date && !data.end_date && !data.canceled_at) {
        data.status = 'retirada';
      }
      if (!data.start_date && !data.end_date && !data.canceled_at) {
        data.status = 'pendente';
      }

      return data;
    });

    return deliveriesMaped;
  }

  useEffect(() => {
    async function loadDeliveries() {
      const response = await api.get('delivery');
      const deliveriesMaped = handleDeliveryes(response.data);
      setDeliveries(deliveriesMaped);
    }

    loadDeliveries();
  }, []);

  function handleAddNew() {
    history.push('/deliveries/delivery');
  }

  return (
    <Container>
      <PageTitle>Gerenciando encomendas</PageTitle>
      <form>
        <Header>
          <div>
            <input type="text" placeholder="Buscar por encomendas" />
          </div>
          <NewContent type="button" onClick={handleAddNew}>
            <FaPlus /> <span>CADASTRAR</span>
          </NewContent>
        </Header>
      </form>

      <Table>
        <TableHeader firstSmall>
          <th>ID</th>
          <th>Produto</th>
          <th>Destinatário</th>
          <th>Entregador</th>
          <th>Cidade</th>
          <th>Estado</th>
          <th>Status</th>
          <th>Ações</th>
        </TableHeader>

        {deliveries.map(delivery => (
          <TableDeliveries key={delivery.id}>
            <td>#{delivery.id}</td>
            <td>{delivery.product}</td>
            <td>{delivery.recipient.name}</td>
            <DeliverymanItem>
              <div>
                <Avatar size={55} className="avatar" />
                <span>{delivery.deliveryman.name}</span>
              </div>
            </DeliverymanItem>
            <td>{delivery.recipient.city}</td>
            <td>{delivery.recipient.state}</td>
            <DeliveryStatus status={delivery.status}>
              <div>
                <GoPrimitiveDot size={40} />
                <span>ENTREGUE</span>
              </div>
            </DeliveryStatus>
            <td>
              <More>
                <DeliveryModal />

                <NavLink to="/deliveries/delivery/1">
                  <FaPen size={15} style={{ color: '#4D85EE' }} />
                  <span>Editar</span>
                </NavLink>
                <NavLink to="#">
                  <MdDeleteForever size={15} style={{ color: '#DE3B3B' }} />
                  <span>Excluir</span>
                </NavLink>
              </More>
            </td>
          </TableDeliveries>
        ))}
      </Table>
    </Container>
  );
}
