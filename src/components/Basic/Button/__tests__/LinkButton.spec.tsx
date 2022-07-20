import React from 'react';
import renderer from 'react-test-renderer';
import { render } from "@testing-library/react";
import 'jest-styled-components';
import LinkButton from '../LinkButton/LinkButton';

describe('Unit test for <LinkButton />', () => {
    it('Should render <LinkButton /> on default values', () => {
        const component = renderer.create(
            <LinkButton
              data={{
                  displayText: 'This is a Link Button'
              }}
            />,
          );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('Should render small size link button if send option as sm', () => {
        const { container } = render(
            <LinkButton
              data={{
                displayText: 'This is a Link Button'  
              }}
              options={{
                  size: 'sm'
              }}
            />,
          )
        expect(container.textContent).toBe('This is a Link Button');
        expect(container.firstChild).toHaveStyleRule('min-width', '24px');
        expect(container.firstChild).toHaveStyleRule('padding', '4px 8px');
        expect(container.firstChild).toHaveStyleRule('font-size', '12px');
    });

    it('Should render medium size link button if send option as md', () => {
        const { container } = render(
            <LinkButton
              data={{
                displayText: 'This is a md Link Button'  
              }}
              options={{
                  size: 'md'
              }}
            />,
          )
        expect(container.textContent).toBe('This is a md Link Button');
        expect(container.firstChild).toHaveStyleRule('min-width', '28px');
        expect(container.firstChild).toHaveStyleRule('padding', '8px 16px');
        expect(container.firstChild).toHaveStyleRule('font-size', '17px');
    });

    it('Should render large size link button if send option as lg', () => {
        const { container } = render(
            <LinkButton
              data={{
                displayText: 'This is a Lg Link Button'  
              }}
              options={{
                  size: 'lg'
              }}
            />,
          )
        expect(container.textContent).toBe('This is a Lg Link Button');
        expect(container.firstChild).toHaveStyleRule('min-width', '33px');
        expect(container.firstChild).toHaveStyleRule('padding', '12px 20px');
        expect(container.firstChild).toHaveStyleRule('font-size', '20px');
    });
    
});