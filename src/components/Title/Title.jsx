import React from 'react';
import Button from '../Button/Button';
import * as S from '../Title/Title.style';

const Title = ({ children }) => {
  return (
    <S.Title>
      <h1>{children}</h1>
    </S.Title>
  );
};

export default Title;
