import React from 'react';

import { Container } from './styles';

import MoonLoader from 'react-spinners/MoonLoader';

function Loading() {
  return (
    <Container>
      <MoonLoader
        size={32}
        color={"#123abc"}
        loading={true}
      />
    </Container>
  );
}

export default Loading;