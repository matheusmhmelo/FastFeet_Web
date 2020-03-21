/* eslint-disable import/extensions */
import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import Async from 'react-select/async';

import { IoMdCheckmark } from 'react-icons/io';
import { MdChevronLeft } from 'react-icons/md';

import { Container } from './styles';
import { Header, Save, Back, PageTitle } from '~/styles/pageHeader.js';
import {
  ContentForm,
  InputLine,
  SelectDiv,
  SelectName,
} from '~/styles/form.js';

import history from '~/services/history';

export default function Delivery() {
  const recipient = [
    { value: 1, label: 'Matheus Melo' },
    { value: 2, label: 'Matheus Henrique' },
    { value: 3, label: 'Laurene Ishikawa' },
  ];

  function handleBack() {
    history.push('/deliveries');
  }

  return (
    <Container>
      <Form>
        <Header>
          <PageTitle>Cadastro de encomendas</PageTitle>

          <div>
            <Back type="button" onClick={handleBack}>
              <MdChevronLeft />
              <span>VOLTAR</span>
            </Back>
            <Save type="submit">
              <IoMdCheckmark />
              <span>SALVAR</span>
            </Save>
          </div>
        </Header>

        <ContentForm>
          <InputLine>
            <SelectDiv>
              <SelectName>Destinatário</SelectName>
              <Async
                name="recipients"
                defaultOptions={recipient}
                placeholder="Selecione o destinatário..."
              />
            </SelectDiv>
            <SelectDiv>
              <SelectName>Entregador</SelectName>
              <Async
                name="deliveryman"
                defaultOptions={recipient}
                placeholder="Selecione o entregador..."
              />
            </SelectDiv>
          </InputLine>
          <InputLine>
            <div>
              <Input
                label="Nome do Produto"
                name="name"
                type="text"
                placeholder="Digite o nome do produto..."
              />
            </div>
          </InputLine>
        </ContentForm>
      </Form>
    </Container>
  );
}
