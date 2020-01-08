import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { DynamicChildContainer } from 'pages';

describe('<DynamicChildContainer/>', () => {
  it('컴포너트 렌더 테스트 > 데이터 없는 경우', () => {
    const { getByText } = render(<DynamicChildContainer />);
    expect(getByText('Create New Palette')).toBeInTheDocument();
    expect(getByText('+ Add Item')).toBeInTheDocument();
  });
  it('UI렌더 테스트 > 옵션추가버튼을 누르면 맨 마지막에 하나 추가되어야 한다', () => {
    const utils = render(<DynamicChildContainer/>);
    const $addItemButton = utils.getByText('+ Add Item');
    fireEvent.click($addItemButton);
    fireEvent.click($addItemButton);
    const $itemNameList = utils.getAllByText('팔레트 종류를 선택하세요');
    const $itemPriceList = utils.getAllByPlaceholderText('name');
    expect($itemNameList.length).toBe(2);
    expect($itemPriceList.length).toBe(2);
  });
  it('알럿 테스트 > 옵션 5개 이상 만들면 알럿이 떠야 한다', () => {
    const mockAlert = jest.fn();
    window.alert = mockAlert;
    const utils = render(<DynamicChildContainer/>);
    const $addItemButton = utils.getByText('+ Add Item');
    fireEvent.click($addItemButton);
    fireEvent.click($addItemButton);
    fireEvent.click($addItemButton);
    fireEvent.click($addItemButton);
    fireEvent.click($addItemButton);
    fireEvent.click($addItemButton);
    expect(mockAlert).toBeCalledTimes(1);
    expect(mockAlert).toBeCalledWith('max item count: 5');
  });
  it('select box 선택 테스트', async () => {
    const utils = render(<DynamicChildContainer/>);
    const $addItemButton = utils.getByText('+ Add Item');
    fireEvent.click($addItemButton);
    const $selectbox = await utils.getByText('팔레트 종류를 선택하세요');
    fireEvent.click($selectbox);
    const $selectboxPattern = await utils.getByText('패턴');
    fireEvent.click($selectboxPattern);
    utils.getByText('패턴');
  })
})