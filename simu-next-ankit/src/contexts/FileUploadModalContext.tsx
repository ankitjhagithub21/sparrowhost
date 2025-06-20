"use client";
import FileUploadModal from "@/components/FileUploadModal";
import React, { createContext, useContext, useState, ReactNode } from "react";

export type FileType = {
  id: string;
  name: string;
  url: string;
  size?: number;
  type: 'image' | 'video' | 'ppt';
  uploadedAt?: string;
};

type ModalContextType = {
  openModal: (
    onSelect: (file: FileType) => void,
    fileTypeFilter?: 'image' | 'video' | 'ppt'
  ) => void;
};

const FileUploadModalContext = createContext<ModalContextType | null>(null);

export const useFileUploadModal = () => {
  const ctx = useContext(FileUploadModalContext);
  if (!ctx) throw new Error("useFileUploadModal must be used within a provider");
  return ctx;
};

export const FileUploadModalProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [onSelectCallback, setOnSelectCallback] = useState<((file: FileType) => void) | null>(null);
  const [fileTypeFilter, setFileTypeFilter] = useState<'image' | 'video' | 'ppt' | undefined>(undefined);

  const openModal = (
    onSelect: (file: FileType) => void,
    filter?: 'image' | 'video' | 'ppt'
  ) => {
    setIsOpen(true);
    setOnSelectCallback(() => onSelect);
    setFileTypeFilter(filter);
  };

  const handleSelect = (file: FileType) => {
    if (onSelectCallback) {
      onSelectCallback(file);
    }
    closeModal();
  };

  const closeModal = () => {
    setIsOpen(false);
    setOnSelectCallback(null);
    setFileTypeFilter(undefined);
  };

  return (
    <FileUploadModalContext.Provider value={{ openModal }}>
      {children}
      {isOpen && (
        <FileUploadModal
          onSelect={handleSelect}
          onClose={closeModal}
          fileTypeFilter={fileTypeFilter}
        />
      )}
    </FileUploadModalContext.Provider>
  );
};
