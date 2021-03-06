import React from 'react';

import { MdAdd } from 'react-icons/md';

import { Container } from './styles';
import Card from '../Card';


export default function List({ data }: any) {
  return (
    <Container done>
      <header>
        <h2>{data.title}</h2>
        {
          data.creatable && (
            <button type="button">
              <MdAdd size={24} color="#fff" />
            </button>
          )
        }
      </header>

      <ul>
        {  data.cards.map( (card: any) => <Card key={card.id} data={card} />) }
      </ul>
    </Container>
  );
}
