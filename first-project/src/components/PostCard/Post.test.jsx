import { PostCard } from '.';
import { render, screen } from '@testing-library/react';
import { postCardPropsMock } from './mock';

const props = postCardPropsMock;

describe('PostCard', () => {
  it('should render PostCard correctly', () => {
    render(<PostCard {...props} />);

    expect(screen.getByRole('img', { name: props.title })).toBeInTheDocument();

    expect(screen.getByAltText(/title 1/i)).toHaveAttribute(
      'src',
      props.cover
    );
  });

  it('should match snapshot', () => {
    const { container } = render(<PostCard {...props} />);
    expect(container).toMatchSnapshot();
  });
});
