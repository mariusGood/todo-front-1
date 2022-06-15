import React from 'react';
import { Link } from 'react-router-dom';
import { Page } from './Pagination.styles';

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
            <a onClick={() => paginate(page)}>{page}</a>
          </li>
        ))}
      </Page>
    </nav>
  );
};

export default Pagination;
