const listing = require('./listing');

test('hello listing', () => {
	expect(listing(1,2)).toBe(3);
});
