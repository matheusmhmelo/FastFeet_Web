/* eslint-disable import/extensions */
import React from 'react';
import { Form, Input } from '@rocketseat/unform';

import { IoMdCheckmark } from 'react-icons/io';
import { MdChevronLeft } from 'react-icons/md';

import { Container } from './styles';
import { Header, Save, Back, PageTitle } from '~/styles/pageHeader.js';
import { ContentForm, InputLine, AvatarLine } from '~/styles/form.js';

import AvatarInput from '~/components/AvatarInput';

import history from '~/services/history';

export default function Deliverymen() {
  function handleBack() {
    history.push('/deliverymen');
  }

  return (
    <Container>
      <Form>
        <Header>
          <PageTitle>Cadastro de entregador</PageTitle>
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
          <AvatarLine>
            <AvatarInput />
          </AvatarLine>

          <InputLine>
            <div>
              <Input
                label="Nome do Entregador"
                name="name"
                type="text"
                placeholder="Digite o nome do entregador..."
              />
            </div>
          </InputLine>
          <InputLine>
            <div>
              <Input
                label="Email do Entregador"
                name="email"
                type="text"
                placeholder="Digite o email do entregador..."
              />
            </div>
          </InputLine>
        </ContentForm>
      </Form>
    </Container>
  );
}
