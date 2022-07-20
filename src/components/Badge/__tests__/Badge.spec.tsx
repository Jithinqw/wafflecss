import React from "react";
import Badge from "../Badge";
import renderer from 'react-test-renderer';
import { render } from "@testing-library/react";
import 'jest-styled-components';

describe('<Badge /> unit tests', () => {
    it('Should render <Badge /> on calling the component', () => {
        const component = renderer.create(
          <Badge
            data={{
              displayText: 'I am a Badge and I demand some attention'  
            }}
          />,
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('Should render warning badge on passing warn', () => {
      const { container } = render(
        <Badge
          data={{
            displayText: 'Warning Badge'  
          }}
          options={{
              color: 'warn'
          }}
        />,
      )
      expect(container.firstChild).toHaveStyleRule('color','#edf2f7');
    });

    it('Should render success badge on passing success', () => {
      const { container } = render(
        <Badge
          data={{
            displayText: 'Success Badge'  
          }}
          options={{
              color: 'success'
          }}
        />,
      );
      expect(container.firstChild).toHaveStyleRule('color','green');
    });

    it('Should render danger badge on passing danger', () => {
      const { container } = render(
        <Badge
          data={{
            displayText: 'Danger Badge'  
          }}
          options={{
              color: 'danger'
          }}
        />,
      )
      expect(container.firstChild).toHaveStyleRule('color','red');
    });
});
