import { render, screen } from '@testing-library/react';
import App from './App';
import { DataViewer } from './components/DataViewer';
import config from './components/config.json';


test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Form builder!/i);
  expect(linkElement).toBeInTheDocument();
});


describe('data viewer component', () => {
  it('gets config correctly', () => {
    render(<DataViewer />)
    const elem = screen.getByTestId('data-viewer')
    expect(elem).toHaveTextContent('For the input JSON')
  });
});
