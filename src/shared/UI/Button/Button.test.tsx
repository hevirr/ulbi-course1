import { render, screen } from '@testing-library/react';
import { Button, ThemeButton } from 'shared/UI/Button/Button';

describe('button', () => {
  test('simple', () => {
    render(<Button>Test</Button>);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  test('with theme', () => {
    render(<Button theme={ThemeButton.CLEAR}>Test with theme</Button>);
    expect(screen.getByText('Test with theme')).toHaveClass('clear');
    screen.debug();
  });
});
