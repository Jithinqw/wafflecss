import React from "react";
import LegalText from "../LegalText/LegalText";
import renderer from 'react-test-renderer';
import { render } from "@testing-library/react";
import 'jest-styled-components';

describe('<LegalText /> unit tests', () => {
    it('Should render Default legalText', () => {
        const component = renderer.create(
          <LegalText
            data={{
                displayText: 'This is a legalText'
            }}
          />,
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});

describe('Unit test for <LegalText /> size', () => {
  it('Should render small size legalText', () => {
    const { container } = render(
      <LegalText
        data={{
          displayText: 'This is a Legal Heading'
        }}
        options={{
          legalTextSize: 'sm'
        }}
      />,
    )
    expect(container.textContent).toBe('This is a Legal Heading');
    expect(container.firstChild).toHaveStyleRule('font-size', '12px');
  });

  it('Should render md size legalText', () => {
    const { container } = render(
      <LegalText
        data={{
          displayText: 'This is a Legal Heading'
        }}
        options={{
          legalTextSize: 'md'
        }}
      />,
    )
    expect(container.textContent).toBe('This is a Legal Heading');
    expect(container.firstChild).toHaveStyleRule('font-size', '14px');
  });

  it('Should render lg size legalText', () => {
    const { container } = render(
      <LegalText
        data={{
          displayText: 'This is a Legal Heading'
        }}
        options={{
          legalTextSize: 'lg'
        }}
      />,
    )
    expect(container.textContent).toBe('This is a Legal Heading');
    expect(container.firstChild).toHaveStyleRule('font-size', '18px');
  });
});
