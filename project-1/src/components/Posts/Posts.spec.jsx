import { render, screen } from '@testing-library/react';
import { Posts } from '.';
const props = {
  posts: [
    {
      id: 1,
      title: 'title 1',
      cover: 'img/img1.png',
      body: 'body 1',
    },
    {
      id: 2,
      title: 'title 2',
      cover: 'img/img2.png',
      body: 'body 2',
    },
    {
      id: 3,
      title: 'title 3',
      cover: 'img/img3.png',
      body: 'body 3',
    },
  ],
};

describe('<Posts />', () => {
  it('should render posts', () => {
    render(<Posts {...props} />);
    expect(screen.getAllByRole('heading', { name: /title/i })).toHaveLength(3);
    expect(screen.getAllByRole('img', { name: /title/i })).toHaveLength(3);
    expect(screen.getAllByText(/title/i)).toHaveLength(3);
    expect(screen.getByRole('img', { name: /title 3/i })).toHaveAttribute('src', 'img/img3.png');
  });

  it('should not render posts', () => {
    render(<Posts />);
    expect(screen.queryAllByRole('heading', { name: /title/i })).toHaveLength(0);
  });

  it('should match snapshot', () => {
    const { container } = render(<Posts {...props} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
