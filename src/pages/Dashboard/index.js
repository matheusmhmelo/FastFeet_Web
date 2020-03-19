/* eslint-disable import/extensions */
import React from 'react';
import { FaPlus, FaPen } from 'react-icons/fa';
import { GoPrimitiveDot } from 'react-icons/go';
import { IoMdEye } from 'react-icons/io';
import { MdDeleteForever } from 'react-icons/md';

import Avatar from '@material-ui/core/Avatar';

import { Container, DeliverymanItem, DeliveryStatus } from './styles';
import { TableItem, TableHeader, Table } from '~/styles/tables.js';
import { PageTitle, SearchForm, NewContent } from '~/styles/pageHeader.js';

import More from '~/components/More/Big';

export default function Dashboard() {
  return (
    <Container>
      <PageTitle>Gerenciando encomendas</PageTitle>

      <SearchForm>
        <div>
          <input type="text" placeholder="Buscar por encomendas" />
        </div>
        <NewContent type="button">
          <FaPlus /> <span>CADASTRAR</span>
        </NewContent>
      </SearchForm>

      <Table>
        <TableHeader firstSmall>
          <th>ID</th>
          <th>Destinatário</th>
          <th>Entregador</th>
          <th>Cidade</th>
          <th>Estado</th>
          <th>Status</th>
          <th>Ações</th>
        </TableHeader>
        <TableItem>
          <td>#01</td>
          <td>Ludwig van Beethoven</td>
          <DeliverymanItem>
            <div>
              <Avatar size={55} className="avatar" />
              <span>John Doe</span>
            </div>
          </DeliverymanItem>
          <td>Rio do Sul</td>
          <td>Santa Catarina</td>
          <DeliveryStatus status="entregue">
            <div>
              <GoPrimitiveDot size={40} />
              <span>ENTREGUE</span>
            </div>
          </DeliveryStatus>
          <td>
            <More>
              <a href="/">
                <IoMdEye size={15} style={{ color: '#8E5BE8' }} />
                <span>Visualizar</span>
              </a>
              <a href="/">
                <FaPen size={15} style={{ color: '#4D85EE' }} />
                <span>Editar</span>
              </a>
              <a href="/">
                <MdDeleteForever size={15} style={{ color: '#DE3B3B' }} />
                <span>Excluir</span>
              </a>
            </More>
          </td>
        </TableItem>
        <TableItem>
          <td>#01</td>
          <td>Ludwig van Beethoven</td>
          <DeliverymanItem>
            <div>
              <Avatar size={55} className="avatar" />
              <span>John Doe</span>
            </div>
          </DeliverymanItem>
          <td>Rio do Sul</td>
          <td>Santa Catarina</td>
          <DeliveryStatus status="pendente">
            <div>
              <GoPrimitiveDot size={40} />
              <span>PENDENTE</span>
            </div>
          </DeliveryStatus>
          <td>
            <More>
              <a href="/">
                <IoMdEye size={15} style={{ color: '#8E5BE8' }} />
                <span>Visualizar</span>
              </a>
              <a href="/">
                <FaPen size={15} style={{ color: '#4D85EE' }} />
                <span>Editar</span>
              </a>
              <a href="/">
                <MdDeleteForever size={15} style={{ color: '#DE3B3B' }} />
                <span>Excluir</span>
              </a>
            </More>
          </td>
        </TableItem>
        <TableItem>
          <td>#01</td>
          <td>Ludwig van Beethoven</td>
          <DeliverymanItem>
            <div>
              <Avatar size={55} className="avatar" />
              <span>John Doe</span>
            </div>
          </DeliverymanItem>
          <td>Rio do Sul</td>
          <td>Santa Catarina</td>
          <DeliveryStatus status="retirada">
            <div>
              <GoPrimitiveDot size={40} />
              <span>RETIRADA</span>
            </div>
          </DeliveryStatus>
          <td>
            <More>
              <a href="/">
                <IoMdEye size={15} style={{ color: '#8E5BE8' }} />
                <span>Visualizar</span>
              </a>
              <a href="/">
                <FaPen size={15} style={{ color: '#4D85EE' }} />
                <span>Editar</span>
              </a>
              <a href="/">
                <MdDeleteForever size={15} style={{ color: '#DE3B3B' }} />
                <span>Excluir</span>
              </a>
            </More>
          </td>
        </TableItem>
        <TableItem>
          <td>#01</td>
          <td>Ludwig van Beethoven</td>
          <DeliverymanItem>
            <div>
              <Avatar size={55} className="avatar" />
              <span>John Doe</span>
            </div>
          </DeliverymanItem>
          <td>Rio do Sul</td>
          <td>Santa Catarina</td>
          <DeliveryStatus status="cancelada">
            <div>
              <GoPrimitiveDot size={40} />
              <span>CANCELADA</span>
            </div>
          </DeliveryStatus>
          <td>
            <More>
              <a href="/">
                <IoMdEye size={15} style={{ color: '#8E5BE8' }} />
                <span>Visualizar</span>
              </a>
              <a href="/">
                <FaPen size={15} style={{ color: '#4D85EE' }} />
                <span>Editar</span>
              </a>
              <a href="/">
                <MdDeleteForever size={15} style={{ color: '#DE3B3B' }} />
                <span>Excluir</span>
              </a>
            </More>
          </td>
        </TableItem>
      </Table>
    </Container>
  );
}
