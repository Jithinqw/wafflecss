import Utilities from "../common";

describe('Unit test for isEmpty', () => {
    // Test for isEmpty
    it('Should return true for an empty string', () => {
        const emptyObj = '';
        expect(Utilities.isEmpty(emptyObj)).toBe(true);
    });

    it('Should return false for non-empty string', () => {
        const nonEmpty = 'I am groot';
        expect(Utilities.isEmpty(nonEmpty)).toBe(false);
    });
});

describe('Unit test for isEmptyObject', () => {
    // Test for isEmptyObject
    it('Should return true for empty object', () => {
        const empty = {};
        expect(Utilities.isEmptyObject(empty)).toBe(true);
    });

    it('Should return false for non-empty object', () => {
        const nonEmpty = {'command': 'Bring me thanos'};
        expect(Utilities.isEmptyObject(nonEmpty)).toBe(false);
    });

    it('Should return true for typeof objects', () => {
        const typedObj = 'undefined';
        expect(Utilities.isEmptyObject(typedObj)).toBe(true);
    });
});

// Test for combine array
test('Should return spaced string array', () => {
    const array = ['root', 'marker'];
    expect(Utilities.combineStyleArray(array)).toBe(array.join(' '));
});