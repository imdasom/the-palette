import React, { Suspense } from 'react';
import { render, waitForElement } from '@testing-library/react';
import { PaletteCreate } from './index';

const getComponentWithSuspense = function() {
  return (
    <Suspense fallback={<div>Loading PaletteCreate...</div>}>
      <PaletteCreate />
    </Suspense>
  );
};

describe('<PaletteCreate>', () => {
  it('render component', async () => {
    const { getByText } = render(getComponentWithSuspense());
    const lazyElement = await waitForElement(() => getByText('Create Palette'));
    expect(lazyElement).toBeInTheDocument();
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