import React, { Suspense } from 'react';
import { render, wait, waitForElement, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { PaletteCreate } from 'pages';

const getComponentWithSuspense = function() {
  return (
    <MemoryRouter>
      <Suspense fallback={<div>Loading PaletteCreate...</div>}>
        <PaletteCreate />
      </Suspense>
    </MemoryRouter>
  );
};

describe('<PaletteCreate>', () => {
  it('render component', async () => {
    const { getByText } = render(getComponentWithSuspense());
    const lazyElement = await waitForElement(() => getByText('Create Palette'));
    expect(lazyElement).toBeInTheDocument();
  });
  it('paletteItem 4개가 있어야 한다', async () => {
    const { getByText } = render(getComponentWithSuspense());
    const textElements = await waitForElement(() => [
      getByText('#AAAAAA'),
      getByText('#BBBBBB'),
      getByText('#CCCCCC'),
      getByText('#DDDDDD')
    ]);

    textElements.forEach((textElement) => {
      expect(textElement).toBeInTheDocument();
    });
  });
  it('should set palette item when ColorPicker clicked', async () => {
    const { container, getByTestId } = render(getComponentWithSuspense());
    await wait();
    const $colorItem3 = getByTestId('ColorItem3');
    const $redColor = container.querySelector('div[title="#D0021B"]');

    fireEvent.click($colorItem3);
    fireEvent.click($redColor);

    expect($colorItem3.style.backgroundColor).toBe('rgb(208, 2, 27)');
  });
  it('should show ColorPicker when click palette item which not active', () => {

  });
  it('should hide ColorPicker when click palette item which active', () => {

  });
  it('should ColorPicker have set same color when palette item clicked', async () => {
    const { container, getByTestId } = render(getComponentWithSuspense());
    await wait();
    const $colorItem2 = getByTestId('ColorItem2');
    const $hexInput = container.querySelector('.sketch-picker').querySelector('input');

    fireEvent.click($colorItem2);

    expect($hexInput.value).toBe('BBBBBB');
  });
  it('should have been set at least 1 color when submit button clicked', () => {

  });
});