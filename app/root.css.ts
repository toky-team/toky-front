import { createGlobalTheme, globalFontFace, globalStyle } from '@vanilla-extract/css';

const spoqaHanSansNeo = 'SpoqaHanSansNeo-Regular';

globalFontFace(spoqaHanSansNeo, {
  src: 'url("https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SpoqaHanSansNeo-Regular.woff") format("woff")',
  fontWeight: 'normal',
  fontStyle: 'normal',
});

globalStyle('html', {
  fontFamily: spoqaHanSansNeo,
});

globalStyle('button', {
  cursor: 'pointer',
});

globalStyle('input', {
  border: 'none',
  outline: 'none',
});

export const vars = createGlobalTheme(':root', {
  color: {
    'bg-0': '#121212',
    'bg-3': 'linear-gradient(0deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.03) 100%), #121212',
    'bg-5': 'linear-gradient(0deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.05) 100%), #121212',
    'bg-7': 'linear-gradient(0deg, rgba(255, 255, 255, 0.07) 0%, rgba(255, 255, 255, 0.07) 100%), #121212',
    'bg-10': 'linear-gradient(0deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.10) 100%), #121212',
    'bg-14': 'linear-gradient(0deg, rgba(255, 255, 255, 0.14) 0%, rgba(255, 255, 255, 0.14) 100%), #121212',
    white: '#FFF',
    'white-87': 'rgba(255, 255, 255, 0.87)',
    'white-60': 'rgba(255, 255, 255, 0.60)',
    'white-38': 'rgba(255, 255, 255, 0.60)',
    'white-15': 'rgba(255, 255, 255, 0.15)',
    'purple-gr': 'linear-gradient(90deg, #4C0EB0 -12.75%, rgba(76, 14, 176, 0.60) 113.73%)',
    'red-gr-1': 'linear-gradient(90deg, #F3233C 0%, rgba(243, 35, 60, 0.25) 100%)',
    'red-gr-2': 'linear-gradient(90deg, #F3233C 0%, #F95B6E 100%)',
    'blue-gr-1': 'linear-gradient(90deg, rgba(41, 72, 255, 0.25) 0%, #2948FF 100%)',
    'blue-gr-2': 'linear-gradient(90deg, #5B84FF 0%, #2948FF 100%)',
    'light-red': '#F95B6E',
    red: '#F3233C',
    blue: '#2948FF',
    'light-blue': '#5988FF',
  },
});
