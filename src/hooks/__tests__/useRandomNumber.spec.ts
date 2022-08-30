import { renderHook } from '@testing-library/react';
import useRandomNumber from '../useRandomNumber';

describe('Unit tests for useToggle', () => {
    it('Should render undetermined if tested agnist no browser', () => {
      const hook = renderHook(() => useRandomNumber(3,6));
      // No window test
      // TODO: Add test for other browsers
      expect(hook.result.current).toBeGreaterThanOrEqual(3);
    });
});
