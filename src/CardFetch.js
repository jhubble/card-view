/*
 * Fetch a page of elder scrolls.
 * Currently just a simple interface to fetch api.
 */
import PropTypes from 'prop-types';

/* number of items in a page */
const PAGE_SIZE = 20;

const CardFetch = page => {
  return fetch(`https://api.elderscrollslegends.io/v1/cards?pageSize=${PAGE_SIZE}&page=${page}`).then(response => {
    return response.json();
  });
};

CardFetch.PropTypes = {
  /* page number to fetch. First page is 1; Page size is controlled by PAGE_SIZE constant */
  page: PropTypes.number,
};
export default CardFetch;
