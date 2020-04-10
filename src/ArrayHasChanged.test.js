import ArrayHasChanged from './ArrayHasChanged';

describe('ArrayHasChanged', () => {
  it('should return false with empty arrays', () => {
    // assert on the response
    expect(ArrayHasChanged([], [])).toBe(false);
  });
  it('should return  false when order changes', () => {
    expect(ArrayHasChanged(['cat', 'dog', 'rat'], ['dog', 'cat', 'rat'])).toBe(false);
  });
  it('should return true when case changes', () => {
    expect(ArrayHasChanged(['cat', 'dog', 'rat'], ['cat', 'dog', 'Rat'])).toBe(true);
  });
  it('should return true when number of items changes', () => {
    expect(ArrayHasChanged(['cat', 'dog', 'rat', 'rat'], ['cat', 'dog', 'rat'])).toBe(true);
  });
  it('should return true when strings are different', () => {
    expect(ArrayHasChanged(['bill', 'bob'], ['fred', 'wilma'])).toBe(true);
  });
  it('should return false when there are multiple similar items', () => {
    expect(
      ArrayHasChanged(
        ['cat', 'dog', 'rat', 'rat', 'dog', 'dog', 'dog'],
        ['cat', 'dog', 'dog', 'rat', 'dog', 'dog', 'rat'],
      ),
    ).toBe(false);
  });
});
