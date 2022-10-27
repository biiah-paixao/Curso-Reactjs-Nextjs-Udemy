import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { InputSearch } from '.';

describe('<InputSearch />', () => {
  it('should have a value of searchValue', () => {
    const fn = jest.fn();
    render(<InputSearch type="search" searchValue="testando" handleChange={fn} />);

    const inputSearch = screen.getByPlaceholderText(/type your search/i);
    expect(inputSearch.value).toBe('testando');
  });

  it('should call handleChange function on each key pressed', () => {
    const fn = jest.fn();
    render(<InputSearch type="search" handleChange={fn} searchValue="um valor" />);

    const inputSearch = screen.getByPlaceholderText(/type your search/i);

    const value = 'o valor';

    userEvent.type(inputSearch, value);

    expect(inputSearch.value).toBe('um valor');
    expect(fn).toHaveBeenCalledTimes(value.length);
  });

  it('should match snapshot', () => {
    const fn = jest.fn();
    const { container } = render(<InputSearch handleChange={fn} searchValue="testando" />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
