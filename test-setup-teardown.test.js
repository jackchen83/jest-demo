let obj = null;

beforeEach(() => {
    obj = {
        id: 123,
        name: 'ibm'
    };
});

afterEach(() => {
    obj = null;
});

test('test obj - name', () => {
    expect(obj.name).toBe('ibm');
    obj.name = 'xxx';
});

test('test obj - id', () => {
    expect(obj.id).toBe(123);
    expect(obj.name).toBe('ibm');
});

describe('only test obj id', () => {
    test('if id > 12', () => {
        expect(obj.id).toBeGreaterThan(12);
    });

    test('if id > 13', () => {
        expect(obj.id).toBeGreaterThan(13);
    });
});