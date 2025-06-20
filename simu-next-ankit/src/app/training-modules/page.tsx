'use client';

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Eye, Plus } from "lucide-react";
import AddTrainingModule from "@/components/AddTrainingModule";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";

const TrainingPage = () => {
  const [showModal, setShowModal] = useState(false);
  const { modules } = useSelector((state: RootState) => state.module);
 
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <div className="p-6">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Training Modules</h1>
          <p className="text-gray-600 mt-1">Create and manage your training content</p>
        </div>
        <Button onClick={openModal} className="flex items-center space-x-2">
          <Plus className="w-5 h-5" />
          <span>Add Training Module</span>
        </Button>
      </div>



      {/* Modules Grid */}
      {modules.length === 0 ? (
        <div className="text-center py-16 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
          <div className="max-w-md mx-auto">
            <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No training modules yet</h3>
            <p className="text-gray-500 mb-6">
              Get started by creating your first training module with interactive content.
            </p>
            <Button onClick={openModal} className="flex items-center space-x-2">
              <Plus className="w-5 h-5" />
              <span>Create Your First Module</span>
            </Button>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {modules.map((module) => (
            <div
              key={module.id}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              {/* Module Image */}
              <div className="relative h-48 bg-gray-100">
                <img
                  src={module.image}
                  alt={module.moduleName}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjE5MiIgdmlld0JveD0iMCAwIDMwMCAxOTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMTkyIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjE1MCIgeT0iOTYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiM5Q0EzQUYiIGZvbnQtc2l6ZT0iMTQiPk5vIEltYWdlPC90ZXh0Pgo8L3N2Zz4K';
                  }}
                />
                <div className="absolute top-3 right-3">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {module.slides.length} slide{module.slides.length !== 1 ? 's' : ''}
                  </span>
                </div>
              </div>

              {/* Module Content */}
              <div className="p-4">
                <div className="mb-2">
                  <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
                    {module.moduleName}
                  </h3>
                </div>




                <Link href={`/training-module-preview?id=${module.id}`} target="_blank">
                  <Button>
                    <Eye />

                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal */}
      {showModal && <AddTrainingModule onClose={closeModal} />}
    </div>
  );
};

export default TrainingPage;