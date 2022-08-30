import { renderHook, act } from '@testing-library/react';
import { useToggle } from '../useToggle';

describe('Unit tests for useToggle', () => {
    it('correctly returns initial state', () => {
      const hook = renderHook(() => useToggle(false));
      expect(hook.result.current[0]).toBe(false);
    });

    it('Should render toggle on initial value if toggleValue is called.', () => {
        const hook = renderHook(() => useToggle(false));
        expect(hook.result.current[0]).toBe(false);

        act(() => hook.result.current[1]());
        expect(hook.result.current[0]).toBe(true);
    });
});  