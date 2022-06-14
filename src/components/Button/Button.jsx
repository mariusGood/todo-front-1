import React from 'react';
import PropTypes from 'prop-types';
import * as S from '../Button/Button.style';

const Button = ({ bg, color, children, onClick }) => {
  return (
    <S.Button bg={bg} color={color} onClick={onClick}>
      {children}
    </S.Button>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  color: PropTypes.string,
  bg: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
