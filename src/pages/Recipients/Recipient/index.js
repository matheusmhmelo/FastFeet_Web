/* eslint-disable import/extensions */
import React from 'react';
import { Form, Input } from '@rocketseat/unform';

import { IoMdCheckmark } from 'react-icons/io';
import { MdChevronLeft } from 'react-icons/md';

import { Container } from './styles';
import { Header, Save, Back, PageTitle } from '~/styles/pageHeader.js';
import { ContentForm, InputLine } from '~/styles/form.js';

import history from '~/services/history';

export default function Recipient() {
  function handleBack() {
    history.push('/recipients');
  }

  return (
    <Container>
      <Form>
        <Header>
          <PageTitle>Cadastro de destinatário</PageTitle>

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
            <div>
              <Input
                label="Nome"
                name="name"
                type="text"
                placeholder="Nome do destinatário"
              />
            </div>
          </InputLine>
          <InputLine>
            <div className="address-div">
              <Input
                label="Rua"
                name="address"
                type="text"
                placeholder="Nome da Rua"
              />
            </div>
            <div>
              <Input
                label="Número"
                name="number"
                type="text"
                placeholder="Número"
              />
            </div>
            <div>
              <Input
                label="Complemento"
                name="complement"
                type="text"
                placeholder="Complemento"
              />
            </div>
          </InputLine>
          <InputLine>
            <div>
              <Input
                label="Cidade"
                name="city"
                type="text"
                placeholder="Cidade"
              />
            </div>
            <div>
              <Input
                label="Estado"
                name="state"
                type="text"
                placeholder="Estado"
              />
            </div>
            <div>
              <Input label="CEP" name="zipcode" type="text" placeholder="CEP" />
            </div>
          </InputLine>
        </ContentForm>
      </Form>
    </Container>
  );
}
