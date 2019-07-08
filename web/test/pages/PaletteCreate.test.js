import React from 'react';
import { render } from 'react-testing-library';
import { PaletteCreate } from '../src/pages';

describe('<PaletteCreate>', () => {
  it('matches snapshot', () => {
    const utils = render(<PaletteCreate />);
    expect(utils.container).toMatchSnapshot();
  });
  it('should have 4 paletteItem', () => {
    const utils = render(<PaletteCreate />);
    const paletteItems = utils.queryAllBy('paletteItem');
  });
  it('should show ColorPicker when click palette item which not active', () => {

  });
  it('should hide ColorPicker when click palette item which active', () => {
    i
  });
  it('should ColorPicker have set same color when palette item clicked', () => {

  });
  it('should palette item change color by ColorPicker changing', () => {

  });
  it('should gather at least 1 color when submit button clicked', () => {

  });
});