import React from "react";
import Alert from "../Alert";
import renderer from 'react-test-renderer';
import { render } from "@testing-library/react";
import 'jest-styled-components';

describe('<Alert /> unit tests for styles', () => {
    it('Should render <Alert /> component when called', () => {
      const component = renderer.create(
        <Alert
          data={{
            displayText: 'This is stacked Alert with dark variant'  
          }}
          options={{
              variants: 'dark'
          }}
        />,
      );
      let tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('Should render <Alert /> component when called and render text provided', () => {
      const textContent = 'This is stacked Alert with dark variant';
      const component = renderer.create(
        <Alert
          data={{
            displayText: textContent
          }}
          options={{
              variants: 'dark'
          }}
        />,
      );
      let tree = component.toJSON();
      expect(tree).toMatchSnapshot();
      const { container } = render(
        <Alert
          data={{
            displayText: 'This is stacked Alert with dark variant'  
          }}
          options={{
              variants: 'dark'
          }}
        />,
      )
      expect(container.textContent).toBe('This is stacked Alert with dark variant');
    });

    it('Should render a new text when props are updated', () => {
      const component = renderer.create(
        <Alert
          data={{
            displayText: 'This is stacked Alert with dark variant'  
          }}
          options={{
              variants: 'dark'
          }}
        />,
      );

      renderer.act(() => {component.update(
        <Alert
          data={{
            displayText: 'Darkest of time'  
          }}
          options={{
              variants: 'dark'
          }}
        />,
      )});
      expect(component.toJSON()).toMatchSnapshot();
    });

    it('Alert should render a new style when changing the variant to dark', () => {
      const { container } = render(
        <Alert
          data={{
            displayText: 'This is stacked Alert with dark variant'  
          }}
          options={{
              variants: 'dark'
          }}
        />,
      )
      expect(container.firstChild).toHaveStyleRule('background','rgb(84,87,92)');
    });

    it('Alert should render a new style when changing the variant to error', () => {
      const { container } = render(
        <Alert
          data={{
            displayText: 'This is stacked Alert with error variant'  
          }}
          options={{
              variants: 'error'
          }}
        />,
      )
      expect(container.firstChild).toHaveStyleRule('background','rgb(254,215,215)');
    });

    it('Alert should render a new style when changing the variant to success', () => {
      const { container } = render(
        <Alert
          data={{
            displayText: 'This is stacked Alert with success variant'  
          }}
          options={{
              variants: 'success'
          }}
        />,
      )
      expect(container.firstChild).toHaveStyleRule('background','rgb(198,246,213)');
    });

    it('Alert should render a new style when changing the variant to info', () => {
      const { container } = render(
        <Alert
          data={{
            displayText: 'This is stacked Alert with info variant'  
          }}
          options={{
              variants: 'info'
          }}
        />,
      )
      expect(container.firstChild).toHaveStyleRule('background','rgb(190,227,248)');
    });

    it('Alert should render a new style when changing the variant to warning', () => {
      const { container } = render(
        <Alert
          data={{
            displayText: 'This is stacked Alert with info variant'  
          }}
          options={{
              variants: 'warning'
          }}
        />,
      )
      expect(container.firstChild).toHaveStyleRule('background','rgb(254,235,200)');
    });
});
