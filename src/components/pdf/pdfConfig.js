import { pdfjs } from 'react-pdf';

// ✅ Esta es la forma correcta para Vite y ESM
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.mjs',
  import.meta.url
).toString();
