import CardFetch from './CardFetch';
import elderResults from '../testData/elderApi.json';

describe('testing CardFetch API', () => {
  jest.spyOn(global, 'fetch').mockImplementation(url => {
    const result = /api.elderscrollslegends.io\/v1\/cards\?pageSize=\d+&page=1/.test(url) ? elderResults : '';
    return Promise.resolve({
      json: () => Promise.resolve(result),
    });
  });
  it('calls API and return appropriate results for first page', () => {
    // assert on the response
    return CardFetch(1).then(res => {
      expect(res).toEqual(elderResults);
    });
  });
  it('calls different url when asked for second page', () => {
    return CardFetch(4).then(res => {
      expect(res).not.toEqual(elderResults);
    });
  });
});
