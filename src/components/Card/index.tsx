import React from 'react';

import { Container, Label } from './styles';

export default function Card({data}: any) {
  return (
    <Container>

      <header>
        {data.labels.map( (label: string ) => <Label key={label} color={label} /> )}
        
      </header>
  <p>{data.content}</p>


      {data.user && (
        <img src={data.user} alt=""/>
      )}

      

    </Container>
  );
}
