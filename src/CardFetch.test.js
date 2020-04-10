import CardFetch from './CardFetch';
import elderResults from '../testData/elderApi.json';

describe('testing CardFetch API', () => {
  // TODO: implement more robust checking of parameters, rather than manipulating of responses
  jest.spyOn(global, 'fetch').mockImplementation(url => {
    let result = /api.elderscrollslegends.io\/v1\/cards\?pageSize=\d+&page=1/.test(url) ? elderResults : '';
    if (/name=randomname/.test(url)) {
      result = [elderResults[0]];
    }
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
  it('returns a different result if we pass a name', () => {
    return CardFetch(1, 'randomname').then(res => {
      expect(res).toEqual([elderResults[0]]);
    });
  });
});
