import { selector } from 'recoil';
import { testApiDataAtom, testApiDataonStartAtom, textAtom } from './atoms';

export const textSelector = selector({
  key: 'textSelector', // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const text = get(textAtom);

    return { text: text, length: text.length };
  },
});

export const testApiSelector = selector({
  key: 'testApsDataSelector',
  get: ({ get }) => {
    const testApiData = get(testApiDataAtom);

    const data = testApiData?.slice(0, 3);

    return { data: data, length: data.length };
  },
});

export const testApiOnStartSelector = selector({
  key: 'testApiOnStartSelector',
  get: ({ get }) => {
    const testApiData = get(testApiDataonStartAtom);

    const data = testApiData?.slice(3, 6);

    return { data: data, length: data.length };
  },
});
