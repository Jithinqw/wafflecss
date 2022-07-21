import React from "react";
import PinInput from "../PinInput/PinInput";
import renderer from 'react-test-renderer';
import { render, screen } from "@testing-library/react";
import 'jest-styled-components';

describe('<PinInput /> unit tests', () => {
    it('Should render PinInput when calling with default values', () => {
        const component = renderer.create(
          <PinInput
            data={{
                value: '2'
            }}
          />,
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});

describe('<PinInput /> styling unit tests', () => {
  it('It should render custom placeholder if provided', () => {
    render(
      <PinInput
        data={{
          value: '',
          placeholder: 'This is a new placeholder'
        }}
      />,
    );
    const inputNode = screen.getByPlaceholderText('This is a new placeholder');
    expect(inputNode).toBeDefined();
  });

  it('User should be able to passs custom ID if provided', () => {
    const result = render(
      <PinInput
        data={{
          value: '',
          placeholder: 'This is a new placeholder',
          id: 'NewTestId'
        }}
      />,
    );
    const textInput = result.container.querySelector('NewTestId');
    expect(textInput).toBeDefined();
  });

  it('If Input is disabled, should be have disabled', () => {
    const { container } = render(
      <PinInput
        data={{
          value: '',
          placeholder: 'This is a new placeholder',
          id: 'NewTestId',
          isDisabled: true
        }}
      />,
    );
    expect(container.firstChild).toHaveStyleRule('opacity', '0.3');
  });

  it('If Input is not disabled, should be have not disabled', () => {
    const { container } = render(
      <PinInput
        data={{
          value: '',
          placeholder: 'This is a new placeholder',
          id: 'NewTestId',
          isDisabled: false
        }}
      />,
    );
    expect(container.firstChild).toHaveStyleRule('opacity', '1');
  });

  it('Should render a custom name if passed a name', () => {
    const { container } = render(
      <PinInput
        data={{
          value: '',
          placeholder: 'This is a new placeholder',
          id: 'NewTestId',
          name: 'userName'
        }}
      />,
    );
    const inputEl = container.querySelector(`input[name="userName"]`);
    expect(inputEl).toBeDefined();
  });

  it('Should render a red border if error prop is passed', () => {
    const { container } = render(
      <PinInput
        data={{
          value: '',
          placeholder: 'This is a new placeholder',
          id: 'NewTestId',
          isError: true
        }}
      />,
    );
    expect(container.firstChild).toHaveStyleRule('border-color', 'red');
  });

  it('Should render a pink border if error prop is passed and custom error color is passed', () => {
    const { container } = render(
      <PinInput
        data={{
          value: '',
          placeholder: 'This is a new placeholder',
          id: 'NewTestId',
          isError: true,
          errorBorderColor: 'pink'
        }}
      />,
    );
    expect(container.firstChild).toHaveStyleRule('border-color', 'pink');
    expect(container.firstChild).toHaveStyleRule('border-width','1px');
  });
})