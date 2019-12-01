import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { DynamicChildContainer } from 'pages';

describe('<DynamicChildContainer/>', () => {
  it('컴포너트 렌더 테스트 > 데이터 없는 경우', () => {
    const { getByText } = render(<DynamicChildContainer />);
    expect(getByText('Menu Page')).toBeInTheDocument();
    expect(getByText('+ Add Option')).toBeInTheDocument();
  });
  it('UI렌더 테스트 > 옵션추가버튼을 누르면 맨 마지막에 하나 추가되어야 한다', () => {
    const utils = render(<DynamicChildContainer/>);
    const $addOptionButton = utils.getByText('+ Add Option');
    fireEvent.click($addOptionButton);
    fireEvent.click($addOptionButton);
    const $optionNameList = utils.getAllByPlaceholderText('option name');
    const $optionPriceList = utils.getAllByPlaceholderText('option price');
    expect($optionNameList.length).toBe(2);
    expect($optionPriceList.length).toBe(2);
  });
  it('알럿 테스트 > 옵션 5개 이상 만들면 알럿이 떠야 한다', () => {
    const mockAlert = jest.fn();
    window.alert = mockAlert;
    const utils = render(<DynamicChildContainer/>);
    const $addOptionButton = utils.getByText('+ Add Option');
    fireEvent.click($addOptionButton);
    fireEvent.click($addOptionButton);
    fireEvent.click($addOptionButton);
    fireEvent.click($addOptionButton);
    fireEvent.click($addOptionButton);
    fireEvent.click($addOptionButton);
    expect(mockAlert).toBeCalledTimes(1);
    expect(mockAlert).toBeCalledWith('max option count: 5');
  });
})