describe('Bubble Sort', function() {
  it('returns an array', function() {
    expect(Array.isArray(bubbleSort([1]))).toBe(true);
  });
  it('handles an empty array', function() {
    expect(bubbleSort([])).toEqual([]);
  });

  it('handles a single element array', function() {
    expect(bubbleSort([1])).toEqual([1]);
  });

  it('handles an array with more than two elements', function() {
    expect(bubbleSort([1, 6, 3, 9, 32, 7, 1])).toEqual([1, 1, 3, 6, 7, 9, 32]);
  });
});
