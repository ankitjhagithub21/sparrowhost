"use client";
import { FileType } from "@/contexts/FileUploadModalContext";
import { X } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";

type Props = {
  onSelect: (file: FileType) => void;
  onClose: () => void;
  fileTypeFilter?: 'image' | 'video' | 'ppt';
};

const FileUploadModal: React.FC<Props> = ({ onSelect, onClose, fileTypeFilter }) => {
  const [files, setFiles] = useState<FileType[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFile, setSelectedFile] = useState<FileType | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // ✅ Fetch existing files from backend on mount
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/api/files");
        if (res.ok) {
          const data: FileType[] = await res.json();
          setFiles(data);
        }
      } catch (err) {
        console.error("Failed to fetch files:", err);
      }
    })();
  }, []);

  // Format helpers (unchanged)
  const formatFileSize = (bytes: number = 0): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024,
      sizes = ['Bytes','KB','MB','GB'],
      i = Math.floor(Math.log(bytes)/Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const getFileIcon = (type: string = "") => {
    if (type.includes('pdf')) return '📄';
    if (type.includes('image')) return '🖼️';
    if (type.includes('video')) return '🎥';
    if (type.includes('audio')) return '🎵';
    if (type.includes('text') || type.includes('word')) return '📝';
    if (type.includes('spreadsheet') || type.includes('excel')) return '📊';
    if (type.includes('presentation') || type.includes('powerpoint')) return '📋';
    return '📁';
  };

  // ✅ Upload logic using backend API
  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const uploaded = e.target.files?.[0];
    if (!uploaded) return;

    setIsUploading(true);
    const formData = new FormData();
    formData.append("files", uploaded);

    try {
      const res = await fetch("/api/upload", { method: "POST", body: formData });
      if (!res.ok) throw new Error("Upload failed");
      const [newFile]: FileType[] = await res.json();
      setFiles(prev => [newFile, ...prev]);
    } catch (err) {
      console.error(err);
    } finally {
      setIsUploading(false);
    }
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const dropped = e.dataTransfer.files?.[0];
    if (!dropped) return;

    setIsUploading(true);
    const formData = new FormData();
    formData.append("files", dropped);

    try {
      const res = await fetch("/api/upload", { method: "POST", body: formData });
      if (!res.ok) throw new Error("Upload failed");
      const [newFile]: FileType[] = await res.json();
      setFiles(prev => [newFile, ...prev]);
    } catch (err) {
      console.error(err);
    } finally {
      setIsUploading(false);
    }
  };

  // Filter logic (unchanged)
  const filteredFiles = files.filter(file => {
    const matchesSearch = file.name.toLowerCase().includes(searchTerm.toLowerCase());
    if (!fileTypeFilter) return matchesSearch;

    const isImage = file.type.startsWith("image/");
    const isVideo = file.type.startsWith("video/");
    const isPpt = /\.(pptx?|odp)$/i.test(file.name);

    if (fileTypeFilter === "image" && !isImage) return false;
    if (fileTypeFilter === "video" && !isVideo) return false;
    if (fileTypeFilter === "ppt" && !isPpt) return false;

    return matchesSearch;
  });

  const acceptTypes =
    fileTypeFilter === 'image' ? 'image/*' :
    fileTypeFilter === 'video' ? 'video/*' :
    fileTypeFilter === 'ppt'
      ? '.ppt,.pptx,application/vnd.ms-powerpoint,application/vnd.openxmlformats-officedocument.presentationml.presentation'
      : '*/*';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 ">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-7xl max-h-[90vh] overflow-hidden flex">
        {/* --- Left Panel --- */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <div className="bg-gradient-to-r items-center from-gray-600 to-gray-800 p-6 text-white flex justify-between">
            <div>
              <h2 className="text-2xl font-bold">File Manager</h2>
              <p className="text-blue-100 mt-1">Upload new files or select from existing ones</p>
            </div>
            <button onClick={onClose} className="text-white hover:bg-gray-700 rounded-full p-2">
              <X/>
            </button>
          </div>

          {/* Upload Area */}
          <div className="flex-1 p-6">
            <div
              className={`h-full border-2 border-dashed rounded-xl p-8 text-center flex flex-col items-center justify-center transition-all duration-300
                ${isDragging ? 'border-blue-500 bg-blue-50 scale-105' : 'border-gray-300 hover:border-gray-400 hover:bg-gray-50'}`}
              onDragOver={e => { e.preventDefault(); setIsDragging(true); }}
              onDragLeave={e => { e.preventDefault(); setIsDragging(false); }}
              onDrop={handleDrop}
            >
              {isUploading ? (
                <div className="space-y-4">
                  <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto"></div>
                  <p className="text-gray-600 font-medium text-lg">Uploading your file...</p>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="flex justify-center">
                    <div className="bg-blue-100 rounded-full p-6">
                      <svg className="w-12 h-12 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Drop files here</h3>
                    <p className="text-gray-500 mt-2 text-lg">or click to browse from your computer</p>
                    <p className="text-gray-400 mt-1 text-sm">Supports all file types</p>
                  </div>
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-gray-600 to-gray-700 text-white font-semibold rounded-xl hover:from-gray-700 hover:to-gray-800 transform hover:scale-105 transition-all duration-200 shadow-lg text-lg"
                  >
                    <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    Choose Files
                  </button>
                  <input
                    ref={fileInputRef}
                    type="file"
                    onChange={handleUpload}
                    className="hidden"
                    accept={acceptTypes}
                  />
                </div>
              )}
            </div>
          </div>

          {/* Footer */}
          <div className="bg-gray-50 px-6 py-4 flex justify-between items-center">
            <div className="text-sm text-gray-600">Total: {files.length} files</div>
            <div className="flex space-x-3">
              <button onClick={onClose} className="px-6 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 font-medium">Cancel</button>
              {selectedFile && (
                <button
                  onClick={() => onSelect(selectedFile)}
                  className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-md"
                >
                  Use Selected File
                </button>
              )}
            </div>
          </div>
        </div>

        {/* --- Right Panel --- */}
        <div className="w-1/2 bg-gray-50 border-l border-gray-200 flex flex-col">
          {/* Header */}
          <div className="p-6 bg-white border-b border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-900">Your Files</h3>
              <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">{filteredFiles.length} files</span>
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search files..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              />
            </div>
          </div>

          {/* File List */}
          <div className="flex-1 overflow-y-auto p-4 space-y-2">
            {filteredFiles.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-gray-500 p-8">
                <svg className="w-16 h-16 mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <p className="text-lg font-medium">No files found</p>
                <p className="text-sm mt-1">Try uploading some files or adjusting your search</p>
              </div>
            ) : (
              filteredFiles.map(file => (
                <div
                  key={file.id}
                  onClick={() => setSelectedFile(file)}
                  className={`p-4 rounded-xl transition-all duration-200 cursor-pointer border-2
                    ${selectedFile?.id === file.id ? 'bg-blue-50 border-blue-300 shadow-md' : 'bg-white border-transparent hover:bg-gray-50 hover:shadow-sm'}`}
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">{getFileIcon(file.type)}</div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-gray-900 truncate text-sm">{file.name}</h4>
                      <div className="flex flex-col space-y-1 text-xs text-gray-500 mt-2">
                        <div className="flex items-center space-x-2">
                          <span className="bg-gray-200 px-2 py-1 rounded-full">{formatFileSize(file.size || 0)}</span>
                          <span>•</span>
                          <span>{file.uploadedAt}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col space-y-2 flex-shrink-0">
                      <button
                        onClick={e => { e.stopPropagation(); window.open(file.url, '_blank'); }}
                        className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                        title="Preview"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </button>
                      {selectedFile?.id === file.id && <div className="w-2 h-2 bg-blue-500 rounded-full mx-auto"></div>}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileUploadModal;
