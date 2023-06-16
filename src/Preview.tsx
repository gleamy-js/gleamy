/* eslint-disable @typescript-eslint/no-unsafe-call */
import App from './.preview/App';
import { createRoot } from 'react-dom/client';

const rootElement = document.getElementById('root');

if (rootElement) {
  createRoot(rootElement).render(<App />);
}

