/* eslint-disable import/extensions */
import React from 'react';
import { IoMdEye } from 'react-icons/io';
import { MdDeleteForever } from 'react-icons/md';

import { NavLink } from 'react-router-dom';

import ProblemsModal from './Modal';

import { Container } from './styles';
import { TableItem, TableHeader, Table } from '~/styles/tables.js';
import { PageTitle } from '~/styles/pageHeader.js';

import More from '~/components/More/Small';

export default function Problems() {
  const text =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec inmauris et felis eleifend elementum vel quis lecLorem ipsum dolor sitamet, consectetur adipiscing elit. Donec in mauris et felis eleifendelementum vel quis lectus…';

  return (
    <Container>
      <PageTitle>Problemas na entrega</PageTitle>

      <Table>
        <TableHeader firstSmall>
          <th>Encomenda</th>
          <th>Problema</th>
          <th>Ações</th>
        </TableHeader>
        <TableItem>
          <td>#01</td>
          <td>{text.length > 115 ? `${text.substr(0, 115)}...` : text}</td>
          <td>
            <More>
              <ProblemsModal />

              <NavLink to="#">
                <MdDeleteForever size={15} style={{ color: '#DE3B3B' }} />
                <span>Excluir</span>
              </NavLink>
            </More>
          </td>
        </TableItem>
        <TableItem>
          <td>#01</td>
          <td>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in
            mauris et felis eleifend elementum vel quis lectus…
          </td>
          <td>
            <More>
              <a href="/">
                <IoMdEye size={15} style={{ color: '#8E5BE8' }} />
                <span>Visualizar</span>
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
          <td>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in
            mauris et felis eleifend elementum vel quis lectus…
          </td>
          <td>
            <More>
              <a href="/">
                <IoMdEye size={15} style={{ color: '#8E5BE8' }} />
                <span>Visualizar</span>
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
          <td>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in
            mauris et felis eleifend elementum vel quis lectus…
          </td>
          <td>
            <More>
              <a href="/">
                <IoMdEye size={15} style={{ color: '#8E5BE8' }} />
                <span>Visualizar</span>
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
