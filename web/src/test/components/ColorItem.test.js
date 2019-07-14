import React from 'react';
import { shallow } from 'enzyme';
import { ColorItem } from "../../components";

describe('<ColorItem>', () => {
  it('성공적으로 렌더링되어야 한다', () => {
    const wrapper = shallow(<ColorItem />);
    expect(wrapper.length).toBe(1);
  });
});