describe('Split Array function', function() {
  it('returns an array with a single element in its original form', function() {
    expect(split([34])).toEqual([34]);
  });
  it('is able to split an array into two halves', function() {
    expect(split([34, 56, 22, 12, 90, 1])).toEqual([[34, 56, 22], [12, 90, 1]]);
  });
  it('is able to split an array with odd length into two halves', function() {
    expect(split([34, 56, 22, 12, 90, 1, 4])).toEqual([
      [34, 56, 22],
      [12, 90, 1, 4],
    ]);
  });
});

//To do:
//handles an array of length 0 or 1
//
