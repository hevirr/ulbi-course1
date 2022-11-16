import { fireEvent, render, screen } from '@testing-library/react';
import { withTranslation } from 'react-i18next';
import {
  renderWithTranslation,
} from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';
import { SideBar } from './SideBar';

describe('SideBar', () => {
  test('SideBar render', () => {
    renderWithTranslation(<SideBar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('SideBar toggle', () => {
    renderWithTranslation(<SideBar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    const toggleButton = screen.getByTestId('sidebar-toggle');
    fireEvent.click(toggleButton);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
