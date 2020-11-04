import React from 'react';
import * as S from './styles';


function CircularImage({ photo, size, color }) {
  return (
    <S.Container size={size} color={color}>
      <img src={photo ? photo : '/assets/clarisse.png'}/>
    </S.Container>
  );
}

export default CircularImage;
