const color = {
  primary: '#ed1d24',
  white: '#ffffff',
  gray_10: '#f4f4f4',
  gray_30: '#cccccc',
  gray_50: '#999999',
  gray_70: '#666666',
  gray_90: '#333333'
};

const breakpointSizes = {
  xs: {
    min: 0,
    max: 576
  },
  sm: {
    min: 577,
    max: 767
  },
  md: {
    min: 768,
    max: 991
  },
  lg: {
    min: 992,
    max: 1199
  },
  xl: {
    min: 1200,
    max: 200000
  }
};

const Theme = {
  color,
  breakpointSizes
};
export default Theme;
