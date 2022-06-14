import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as S from './Input.styles';
import Button from '../Button/Button';
import { postData } from '../../utils/services';

const Input = ({ children, text }) => {
  const [data, setData] = useState();

  const formHandle = (e) => {
    e.preventDefault();
    const inputData = {
      title: data,
    };
    const res = postData(inputData);
    console.log(res);
  };

  return (
    <S.InputWrapper onSubmit={formHandle}>
      <S.Input
        placeholder={text}
        value={data}
        onChange={(e) => setData(e.target.value)}
      >
        {children}
      </S.Input>
      <Button type='submit' color='#9c4700' bg='#f9bf90'>
        Add
      </Button>
    </S.InputWrapper>
  );
};

Input.propTypes = {
  children: PropTypes.any,
  text: PropTypes.string,
};

export default Input;
