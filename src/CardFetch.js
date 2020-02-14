const CardFetch = () => {
  console.log('card fetch');
  return fetch('https://api.elderscrollslegends.io/v1/cards').then(response => {
    return response.json();
  });
};

export default CardFetch;
