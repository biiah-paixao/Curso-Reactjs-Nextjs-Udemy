import { render, screen } from '@testing-library/react';
import { PostCard } from '.';

const mock = {
  title: 'Title',
  body: 'body 1',
  id: 1,
  cover: 'img/img.png',
};

describe('<PostCard />', () => {
  it('should rende the Post correctly', () => {
    render(<PostCard {...mock} />);

    expect(screen.getByRole('img', { name: mock.title })).toHaveAttribute('src', mock.cover);
    expect(screen.getByRole('heading', { name: mock.title })).toBeInTheDocument();
    expect(screen.getByText(mock.body)).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = render(<PostCard {...mock} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
