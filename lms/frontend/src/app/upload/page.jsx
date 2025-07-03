'use client';
import { useState } from 'react';

export default function ScormUploadPage() {
  const [zipFile, setZipFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e) => {
    setZipFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!zipFile) return alert("Please select a .zip file");

    const formData = new FormData();
    formData.append("scormZip", zipFile);

    setUploading(true);
    try {
      const res = await fetch('/api/upload-scorm', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      if (res.ok) {
        alert('Upload successful!');
        // maybe store `data.scormId` to route later
      } else {
        alert(data.message || 'Upload failed');
      }
    } catch (err) {
      alert('Something went wrong');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Upload SCORM Package</h1>
      <input
        type="file"
        accept=".zip"
        onChange={handleFileChange}
        className="mb-4"
      />
      <button
        onClick={handleUpload}
        disabled={uploading}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        {uploading ? 'Uploading...' : 'Upload'}
      </button>
    </div>
  );
}
