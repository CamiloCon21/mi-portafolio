// VisorPDF.jsx
import '../components/pdf/pdfConfig'; // Worker
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

import { useState } from "react";
import { Document, Page } from "react-pdf";

function VisorPDF({ isOpen, onClose }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
      <div className="bg-white p-4 rounded-lg shadow-lg max-h-[90vh] overflow-auto">
        <button
          onClick={onClose}
          className="ml-auto block text-gray-600 hover:text-red-500 font-bold mb-2"
        >
          ✕ Cerrar
        </button>

        <Document
          file="/Cv_Camilo_Contreras.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page
            pageNumber={pageNumber}
            renderTextLayer={true}
            renderAnnotationLayer={true}
          />
        </Document>

        <div className="mt-4 text-center">
          <p>Página {pageNumber} de {numPages}</p>
          <button
            onClick={() => setPageNumber((prev) => Math.max(prev - 1, 1))}
            className="bg-blue-500 text-white px-3 py-1 rounded mr-2"
          >
            Anterior
          </button>
          <button
            onClick={() => setPageNumber((prev) => Math.min(prev + 1, numPages))}
            className="bg-blue-500 text-white px-3 py-1 rounded"
          >
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
}

export default VisorPDF;
