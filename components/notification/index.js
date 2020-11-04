import React from 'react';

import * as S from './styles';

function Notification({ visible, items=[] }) {
  return (
    <S.Container visible={visible}>
      { items.map((item, index) => (
        <S.Item read={item.read} key={index}>
          <p>{item.text}</p>
          <span>{new Date(item.date).toLocaleDateString('pt-br')}</span>
        </S.Item>
      )) }
    </S.Container>
  );
}

export default Notification;