import { renderHook } from "@testing-library/react";
import useColor from '../useColor';

describe('Unit test for useColor', () => {
    it('Should return a valid color if called', () => {
        const colorHook = renderHook(() => useColor());
        expect(colorHook.result.current).toMatch(/^#(?:[0-9a-fA-F]{3}){1,2}$/);
    });
});
