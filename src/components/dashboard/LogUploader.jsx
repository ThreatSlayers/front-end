// src/components/dashboard/LogUploader.jsx
import { useState } from 'react';

const LogUploader = () => {
  const [files, setFiles] = useState([]);

  const handleUpload = (e) => {
    setFiles(Array.from(e.target.files));
  };

  const clearFiles = () => setFiles([]);

  return (
    <div className="bg-card-dark rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Upload Logs</h2>
      <input
        type="file"
        multiple
        onChange={handleUpload}
        className="w-full p-2 rounded bg-base-dark text-white border border-gray-700"
      />
      <div className="mt-4 flex space-x-2">
        <button className="px-4 py-2 rounded-md bg-accent-blue hover:bg-blue-500">
          Upload
        </button>
        {files.length > 0 && (
          <button 
            onClick={clearFiles} 
            className="px-4 py-2 rounded-md bg-gray-600 hover:bg-gray-700"
          >
            Clear
          </button>
        )}
      </div>
      {files.length > 0 && (
        <ul className="mt-4 text-gray-400 text-sm">
          {files.map((file, i) => (
            <li key={i}>• {file.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LogUploader;
