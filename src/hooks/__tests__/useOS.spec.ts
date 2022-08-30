import { renderHook } from '@testing-library/react';
import { useOs } from '../useOS';

describe('Unit tests for useToggle', () => {
    it('Should render undetermined if tested agnist no browser', () => {
      const hook = renderHook(() => useOs());
      // No window test
      // TODO: Add test for other browsers
      expect(hook.result.current).toBe('undetermined');
    });
});
