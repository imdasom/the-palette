// componet import
import React, { Suspense } from 'react';
import { PaletteInfo } from 'pages';
// test library import
import { render, wait, waitForElement, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';

const TEST_TARGET_ID = 1;
const getComponentWithSuspense = function() {
  return (
    <MemoryRouter>
      <Suspense fallback={<div>Loading PaletteInfo...</div>}>
        <PaletteInfo
          match={{params:{id:TEST_TARGET_ID}}}
        />
      </Suspense>
    </MemoryRouter>
  );
};

describe('<PaletteInfo> spec', () => {
  const apiHost = process.env.REACT_APP_API_HOST;
  const mock = new MockAdapter(axios, { deplayResponse: 200 }); // 200ms 가짜 딜레이 설정
  mock.onGet(apiHost + '/api/palettes/1').reply(200, {
    "items": [
      {
        "type": "COLOR",
        "content": {
          "hex": "ffdcf7"
        }
      },
      {
        "type": "COLOR",
        "content": {
          "hex": "ffb3b3"
        }
      },
      {
        "type": "COLOR",
        "content": {
          "hex": "fce2ae"
        }
      },
      {
        "type": "COLOR",
        "content": {
          "hex": "b6ffea"
        }
      }
    ],
    "id": 1,
    "like": 0,
    "created": 1565515134979
  });
  it('render component', async () => {
    const { getByText } = render(getComponentWithSuspense());
    const textElements = await waitForElement(() => [
      getByText('#ffdcf7'),
      getByText('#ffb3b3'),
      getByText('#fce2ae'),
      getByText('#b6ffea'),
      getByText('2019/7/11'),
      getByText('0'),
    ]);

    textElements.forEach((textElement) => {
      expect(textElement).toBeInTheDocument();
    });
  });
});