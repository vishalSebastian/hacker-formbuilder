import { render, screen } from '@testing-library/react';
import App from './App';
import { DataViewer } from './components/DataViewer';
import sampleOne from './components/configs/sample-1.json';
import sampleTwo from './components/configs/sample-2.json';
import { FormBuilder } from './components/FormBuilder';


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

describe('form builder', () => {
  it('Sample JSON 1', () => {
    render(<FormBuilder config={sampleOne} />)
    const textFields = screen.getAllByTestId('data-textfield');
    const numberFields = screen.getAllByTestId('data-numberfield');
    const selectFields = screen.getAllByTestId('data-selectfield');
    expect(textFields).toHaveLength(2)
    expect(numberFields).toHaveLength(1)
    expect(selectFields).toHaveLength(1)
  })
  it('Sample JSON 2', () => {
    render(<FormBuilder config={sampleTwo} />)
    const textFields = screen.getAllByTestId('data-textfield');
    const numberFields = screen.getAllByTestId('data-numberfield');
    const selectFields = screen.getAllByTestId('data-selectfield');
    expect(textFields).toHaveLength(2)
    expect(numberFields).toHaveLength(1)
    expect(selectFields).toHaveLength(2)
  });
});
