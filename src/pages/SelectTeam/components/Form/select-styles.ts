import { StylesConfig } from 'react-select';

const selectStyles: StylesConfig = {
  input: (baseStyles) => ({
    ...baseStyles,
    color: '#fff',
  }),
  control: (baseStyles, { isDisabled }) => ({
    ...baseStyles,
    border: '1px',
    boxShadow: 'none',
    backgroundColor: '#1D1B24',
    borderRadius: 0,
    color: '#fff',
    opacity: isDisabled ? '.4' : '1',
  }),
  option: (baseStyles, { isSelected, isFocused }) => ({
    ...baseStyles,
    color: isSelected ? '#FFF' : '#fff',
    backgroundColor: isFocused ? '#D41640' : '#1D1B24',
    display: 'flex',
  }),
  menu: (baseStyles) => ({
    ...baseStyles,
    marginTop: 0,
    borderRadius: 'none',
    backgroundColor: '#1D1B24',
  }),
  singleValue: (baseStyles) => ({
    ...baseStyles,
    color: '#FFF',
  }),
};

export default selectStyles;
