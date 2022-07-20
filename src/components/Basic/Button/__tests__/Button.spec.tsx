import React from "react";
import Button from "../Button";
import renderer from 'react-test-renderer';
import { render } from "@testing-library/react";
import 'jest-styled-components';

describe('<Button /> unit tests', () => {
    it('Should render <Button /> when calling', () => {
        const component = renderer.create(
          <Button
            data={{
                displayText: 'This is a button'
            }}
          />,
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('Should render default styles when not passing option', () => {
      const { container } = render(
        <Button
          data={{
            displayText: 'Default button'  
          }}
        />,
      )
      expect(container.firstChild).toHaveStyleRule('color','rgb(36,41,47)');
    });

    it('Should render danger theme styles when passing danger', () => {
      const { container } = render(
        <Button
          data={{
            displayText: 'Danger button'  
          }}
          options={{
            variants: 'danger'
          }}
        />,
      )
      expect(container.firstChild).toHaveStyleRule('color','rgb(207,34,46)');
    });

    it('Should render success theme styles when passing success', () => {
      const { container } = render(
        <Button
          data={{
            displayText: 'Success button'  
          }}
          options={{
            variants: 'success'
          }}
        />,
      )
      expect(container.firstChild).toHaveStyleRule('color','rgb(9,105,218)');
    });

    it('Should render primary theme styles when passing primary', () => {
      const { container } = render(
        <Button
          data={{
            displayText: 'Success button'  
          }}
          options={{
            variants: 'primary'
          }}
        />,
      )
      expect(container.firstChild).toHaveStyleRule('color','rgb(45,164,78)');
    });
});
