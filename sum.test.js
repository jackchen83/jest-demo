const sum = require('./sum');

test('sum test', () => {
	expect(sum(1,2)).toEqual(3);
});

test('object assignment', () => {
  const data = {one: 1};
  data['two'] = {a: 1, b: 2};

  expect(data).toEqual({one: 1, two: {a: 1, b: 2}});
});

test('various scenarios', () => {
  const n = null;
  const value = 4;
  
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
	// toBe and toEqual are equivalent for numbers
  expect(value).toBe(4);
  expect(value).toEqual(4);
});

// Don't do this!
// test('the data is peanut butter', () => {
//   function callback(data) {
//     expect(data).toBe('peanut butter');
//   }

//   fetchData(callback);
// });
function fetchData(callback) {
	return Promise.resolve('peanut butter').then(callback);
}

function fetchDataFail() {
	return Promise.reject('xx error');
}


test('Testing Asynchronous Code - callback', (done) => {
  function callback(data) {
    try {
      expect(data).toBe('peanut butter');
      done();
    } catch (error) {
      done(error);
    }
  }

  fetchData(callback);
});

test('Testing Asynchronous Code - promise', () => {
	return fetchData().then(data => {
	    expect(data).toBe('peanut butter');
	});
});

test('the fetch fails with an error', () => {
  expect.assertions(1);
  return fetchDataFail().catch(e => expect(e).toMatch('xx error'));
});


test('Testing Asynchronous Code - resolves / .rejects', () => {
	return expect(fetchData()).resolves.toBe('peanut butter');
});

test('Testing Asynchronous Code - async / await', async () => {
	await expect(fetchData()).resolves.toBe('peanut butter');
});