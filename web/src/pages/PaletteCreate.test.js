import React from 'react';
import { render} from '@testing-library/react';
import { mount } from 'enzyme';
import { waitForState } from 'enzyme-async-helpers';
import { PaletteCreate } from './index';

describe('<PaletteCreate>', () => {
  it('matches snapshot', async () => {
    const wrapper = mount(<PaletteCreate />);
    await waitForState(wrapper, state => {
      return state.Splitted != null
    }
    );
    expect(wrapper.instance().state.Splitted).toMatchSnapshot();
  });
  it('should have 4 paletteItem', () => {
    // const utils = render(<PaletteCreate />);
    // const paletteItems = utils.queryAllBy('paletteItem');
  });
  it('아이템을 클릭하면 active가 변경되어야 한다', () => {

  });
  it('should show ColorPicker when click palette item which not active', () => {

  });
  it('should hide ColorPicker when click palette item which active', () => {

  });
  it('should ColorPicker have set same color when palette item clicked', () => {

  });
  it('should palette item change color by ColorPicker changing', () => {

  });
  it('should gather at least 1 color when submit button clicked', () => {

  });
});