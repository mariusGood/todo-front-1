import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Input.styles';
import Button from '../Button/Button';

const Input = ({ children, text, hidden }) => {
  return (
    <S.InputWrapper>
      <S.Input placeholder={text}>{children}</S.Input>
      <Button type='submit' color='#9c4700' bg='#f9bf90'>
        Add
      </Button>
    </S.InputWrapper>
  );
};

Input.propTypes = {
  children: PropTypes.any,
  text: PropTypes.string,
  hidden: PropTypes.string,
};

export default Input;
