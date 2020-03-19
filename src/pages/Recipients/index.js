/* eslint-disable import/extensions */
import React from 'react';
import { FaPlus, FaPen } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md';

import { Container } from './styles';
import { TableItem, TableHeader, Table } from '~/styles/tables.js';
import { PageTitle, SearchForm, NewContent } from '~/styles/pageHeader.js';

import More from '~/components/More/Small';

export default function Dashboard() {
  return (
    <Container>
      <PageTitle>Gerenciando destinatários</PageTitle>

      <SearchForm>
        <div>
          <input type="text" placeholder="Buscar por destinatários" />
        </div>
        <NewContent type="button">
          <FaPlus /> <span>CADASTRAR</span>
        </NewContent>
      </SearchForm>

      <Table>
        <TableHeader firstSmall>
          <th>ID</th>
          <th>Nome</th>
          <th>Endereço</th>
          <th>Ações</th>
        </TableHeader>
        <TableItem>
          <td>#01</td>
          <td>Matheus Melo</td>
          <td>Rua Treze de Maio</td>
          <td>
            <More>
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
          <td>Matheus Melo</td>
          <td>Rua Treze de Maio</td>
          <td>
            <More>
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
          <td>Matheus Melo</td>
          <td>Rua Treze de Maio</td>
          <td>
            <More>
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
          <td>Matheus Melo</td>
          <td>Rua Treze de Maio</td>
          <td>
            <More>
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
