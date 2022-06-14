import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Container.styles';

const Container = ({ children }) => {
  return <S.Container>{children}</S.Container>;
};

Container.propTypes = {
  children: PropTypes.any,
};

export default Container;
