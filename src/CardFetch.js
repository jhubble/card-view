/*
 * Fetch a page of elder scrolls.
 * Currently just a simple interface to fetch api.
 */

/* number of items in a page */
const PAGE_SIZE = 20;

/**
 *
 * Call elderscrolls API and return page number of results
 * First page is 1
 * @param {number} page - page of results to return
 *
 */
const CardFetch = page => {
  return fetch(`https://api.elderscrollslegends.io/v1/cards?pageSize=${PAGE_SIZE}&page=${page}`).then(response => {
    return response.json();
  });
};

export default CardFetch;
