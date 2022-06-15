import React from 'react';
import { Page, StyledLink } from './Pagination.styles';

const Pagination = ({ taskPerPage, totalTasks, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalTasks / taskPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <Page>
        {pageNumbers.map((page) => (
          <li className='page' key={page}>
            <StyledLink to='#' onClick={() => paginate(page)}>
              {page}
            </StyledLink>
          </li>
        ))}
      </Page>
    </nav>
  );
};

export default Pagination;
