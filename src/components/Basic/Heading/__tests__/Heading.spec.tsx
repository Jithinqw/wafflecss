import React from "react";
import Heading from "../Heading";
import renderer from 'react-test-renderer';
import { render } from "@testing-library/react";
import 'jest-styled-components';

describe('<Heading /> Style unit tests', () => {
    it('Should render Heading on calling default values', () => {
        const component = renderer.create(
          <Heading
            data={{
                headingText: 'This is a Heading'
            }}
          />,
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('Should render Italics Heading on passing Italics as option', () => {
      const { container } = render(
        <Heading
          data={{
            headingText: 'This is a Heading'
          }}
          options={{
            style: 'italics'
          }}
        />,
      )
      expect(container.textContent).toBe('This is a Heading');
      expect(container.firstChild).toHaveStyleRule('font-style', 'italic');
    });

    it('Should render Normal Heading on passing Normal as option', () => {
      const { container } = render(
        <Heading
          data={{
            headingText: 'This is a Heading'
          }}
          options={{
            style: 'normal'
          }}
        />,
      )
      expect(container.textContent).toBe('This is a Heading');
      expect(container.firstChild).toHaveStyleRule('font-style', 'normal');
    });

    it('Should render oblique Heading on passing oblique as option', () => {
      const { container } = render(
        <Heading
          data={{
            headingText: 'This is a Heading'
          }}
          options={{
            style: 'oblique'
          }}
        />,
      )
      expect(container.textContent).toBe('This is a Heading');
      expect(container.firstChild).toHaveStyleRule('font-style', 'oblique');
    });
});

describe('<Heading /> weight unit tests', () => {
  it('Should render normal size Heading', () => {
    const { container } = render(
      <Heading
        data={{
          headingText: 'This is a Normal Heading'
        }}
        options={{
          weight: 'normal'
        }}
      />,
    )
    expect(container.textContent).toBe('This is a Normal Heading');
    expect(container.firstChild).toHaveStyleRule('font-weight', '300');
  });

  it('Should render small size Heading', () => {
    const { container } = render(
      <Heading
        data={{
          headingText: 'This is a small Heading'
        }}
        options={{
          weight: 'small'
        }}
      />,
    )
    expect(container.textContent).toBe('This is a small Heading');
    expect(container.firstChild).toHaveStyleRule('font-weight', '100');
  });

  it('Should render extrasmall size Heading', () => {
    const { container } = render(
      <Heading
        data={{
          headingText: 'This is a extrasmall Heading'
        }}
        options={{
          weight: 'extrasmall'
        }}
      />,
    )
    expect(container.textContent).toBe('This is a extrasmall Heading');
    expect(container.firstChild).toHaveStyleRule('font-weight', '90');
  });

  it('Should render bold size Heading', () => {
    const { container } = render(
      <Heading
        data={{
          headingText: 'This is a bold Heading'
        }}
        options={{
          weight: 'bold'
        }}
      />,
    )
    expect(container.textContent).toBe('This is a bold Heading');
    expect(container.firstChild).toHaveStyleRule('font-weight', '500');
  });

  it('Should render extrabold size Heading', () => {
    const { container } = render(
      <Heading
        data={{
          headingText: 'This is a extrabold Heading'
        }}
        options={{
          weight: 'extrabold'
        }}
      />,
    )
    expect(container.textContent).toBe('This is a extrabold Heading');
    expect(container.firstChild).toHaveStyleRule('font-weight', '700');
  });
});

describe('Unit test for <Heading /> size', () => {
  it('Should render normal heading size', () => {
    const { container } = render(
      <Heading
        data={{
          headingText: 'This is a normal Heading'
        }}
        options={{
          size: 'normal'
        }}
      />,
    )
    expect(container.textContent).toBe('This is a normal Heading');
    expect(container.firstChild).toHaveStyleRule('font-size', '16px');
  });

  it('Should render small heading size', () => {
    const { container } = render(
      <Heading
        data={{
          headingText: 'This is a small Heading'
        }}
        options={{
          size: 'small'
        }}
      />,
    )
    expect(container.textContent).toBe('This is a small Heading');
    expect(container.firstChild).toHaveStyleRule('font-size', '12px');
  });

  it('Should render large heading size', () => {
    const { container } = render(
      <Heading
        data={{
          headingText: 'This is a large Heading'
        }}
        options={{
          size: 'large'
        }}
      />,
    )
    expect(container.textContent).toBe('This is a large Heading');
    expect(container.firstChild).toHaveStyleRule('font-size', '18px');
  });

  it('Should render extralarge heading size', () => {
    const { container } = render(
      <Heading
        data={{
          headingText: 'This is a extralarge Heading'
        }}
        options={{
          size: 'extralarge'
        }}
      />,
    )
    expect(container.textContent).toBe('This is a extralarge Heading');
    expect(container.firstChild).toHaveStyleRule('font-size', '24px');
  });
});

describe('Unit test for <Heading /> Color', () => {
  it('Should render default color if not passed', () => {
    const { container } = render(
      <Heading
        data={{
          headingText: 'This is a default Heading color'
        }}
        options={{
          size: 'normal'
        }}
      />,
    )
    expect(container.textContent).toBe('This is a default Heading color');
    expect(container.firstChild).toHaveStyleRule('color', 'rgb(42,42,51)');
  });

  it('Should render default a new color if passed', () => {
    const { container } = render(
      <Heading
        data={{
          headingText: 'This is a new Heading color'
        }}
        options={{
          size: 'normal',
          headingColor: 'pink'
        }}
      />,
    )
    expect(container.textContent).toBe('This is a new Heading color');
    expect(container.firstChild).toHaveStyleRule('color', 'pink !important');
  });
})