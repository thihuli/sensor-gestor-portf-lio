import React from 'react';
import * as S from './styles';

function ProgressBar({ value, heightbar }) {
  return (
    <S.Container heightbar={heightbar} >
      <progress className="bar"
        value={value}
        max="100"
        />
      <div className="text">{value}%</div>
    </S.Container>
  );
}

export default ProgressBar;
