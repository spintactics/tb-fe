import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PositionsPage from './PositionsPage';


describe('TitleComponent', () => {
  it('should render the title', () => {
    // Render the component
    render(<PositionsPage />);

    // Find the title element by its test ID
    const titleElement = screen.getByTestId('page-title');

    // Assert that the title is in the document and has the correct text
    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveTextContent('Positions Page');
  });
});
