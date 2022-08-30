import { renderHook } from "@testing-library/react";
import useHash from "../useHash";

describe('Unit test for useHash', () => {
    it('Correctly returns initial state', () => {
        const hashHook = renderHook(() => useHash());
        expect(hashHook.result.current).not.toBe(null);
        expect(hashHook.result.current).toBeTruthy();
        expect(typeof hashHook.result.current).toBe('string')
    })
})