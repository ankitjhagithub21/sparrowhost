'use client';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addModule } from '@/lib/features/modules/moduleSlice';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

import AddQuizSlide from './slides/AddQuizSlide';
import AddImageSlide from './slides/AddImageSlide';
import AddVideoSlide from './slides/AddVideoSlide';
import AddPptSlide from './slides/AddPptSlide';

import { Slide, Module } from '@/lib/features/modules/moduleSlice';

interface AddTrainingModuleProps {
  onClose: () => void;
}

const AddTrainingModule: React.FC<AddTrainingModuleProps> = ({ onClose }) => {
  const dispatch = useDispatch();
  const [currentStep, setCurrentStep] = useState(1);
  const [moduleData, setModuleData] = useState<Omit<Module, 'id'>>({
    moduleName: '',
    language: '',
    coreBehavior: '',
    completionTime: 0,
    role: '',
    tag: '',
    programResource: '',
    contentType: '',
    passingScore: 0,
    category: '',
    image: '',
    duration: 0,
    industry: '',
    security: '',
    slides: [],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newValue =
      name === 'passingScore' || name === 'duration' || name === 'completionTime' 
        ? parseInt(value, 10) || 0 
        : value;
    setModuleData({ ...moduleData, [name]: newValue });
  };

  const handleSelectChange = (name: string, value: string) => {
    setModuleData({ ...moduleData, [name]: value });
  };

  const addSlide = (type: Slide['type']) => {
    const newSlide: Slide = {
      id: Date.now().toString(),
      type,
      data:
        type === 'quiz'
          ? {
              question: '',
              options: ['', '', '', ''],
              correctAnswer: 0,
              answerDescription: '',
            }
          : type === 'video'
          ? {
              videoUrl: '',
              title: '',
              description: '',
            }
          : type === 'image'
          ? {
              title: '',
              fakeImageUrl: '',
              realImageUrl: '',
            }
          : {
              pptUrl: '',
            },
    };

    setModuleData((prev) => ({
      ...prev,
      slides: [...prev.slides, newSlide],
    }));
  };

  const updateSlide = (index: number, data: Slide['data']) => {
    const updated = [...moduleData.slides];
    updated[index] = { ...updated[index], data };
    setModuleData({ ...moduleData, slides: updated });
  };

  const removeSlide = (index: number) => {
    const updated = [...moduleData.slides];
    updated.splice(index, 1);
    setModuleData({ ...moduleData, slides: updated });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { moduleName, passingScore, image, slides } = moduleData;

    if (!moduleName || !image || !passingScore) {
      alert('Please fill all required fields.');
      return;
    }
    if (slides.length === 0) {
      alert('Please add at least one slide.');
      return;
    }

    const finalModule: Module = {
      ...moduleData,
      id: Date.now().toString(),
    };

    dispatch(addModule(finalModule));
    alert('Module submitted!');
    onClose();
  };

  const validateStepOne = () => {
    const { 
      moduleName, 
      category, 
      passingScore, 
      image, 
      security, 
      industry, 
      role, 
      coreBehavior, 
      programResource,
      language,
      contentType,
      tag
    } = moduleData;
    
   
    return true;
  };

  const handleNextStep = () => {
    if (validateStepOne()) {
      setCurrentStep(2);
    }
  };

  const handlePrevStep = () => {
    setCurrentStep(1);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-full h-full flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b bg-gray-50">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-gray-900">
              Create New Training Module
            </h1>
            <div className="flex items-center space-x-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                currentStep >= 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
              }`}>
                1
              </div>
              <div className="w-8 h-1 bg-gray-200">
                <div className={`h-full bg-blue-600 transition-all duration-300 ${
                  currentStep >= 2 ? 'w-full' : 'w-0'
                }`}></div>
              </div>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                currentStep >= 2 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
              }`}>
                2
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-200 rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Step Indicator */}
        <div className="px-6 py-4 bg-blue-50 border-b">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium text-blue-800">
              Step {currentStep} of 2:
            </span>
            <span className="text-sm text-blue-700">
              {currentStep === 1 ? 'Training Information' : 'Content Creation'}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {currentStep === 1 ? (
            // Step 1: Training Information
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  Training Information
                </h2>
                <p className="text-gray-600">
                  Enter the basic information for your training module.
                </p>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Left Column */}
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <Label htmlFor="moduleName" className="text-base font-medium text-gray-700">
                        Module Name *
                      </Label>
                      <Input
                        id="moduleName"
                        name="moduleName"
                        value={moduleData.moduleName}
                        onChange={handleChange}
                        placeholder="Enter module name"
                        className="w-full h-12 text-base"
                        required
                      />
                    </div>
                    
                    <div className="space-y-3">
                      <Label htmlFor="language" className="text-base font-medium text-gray-700">
                        Language *
                      </Label>
                      <Select value={moduleData.language} onValueChange={(value) => handleSelectChange('language', value)}>
                        <SelectTrigger className="w-full h-12 text-base">
                          <SelectValue placeholder="Select Language" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="english">English</SelectItem>
                          <SelectItem value="spanish">Spanish</SelectItem>
                          <SelectItem value="french">French</SelectItem>
                          <SelectItem value="german">German</SelectItem>
                          <SelectItem value="chinese">Chinese</SelectItem>
                          <SelectItem value="japanese">Japanese</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="category" className="text-base font-medium text-gray-700">
                        Category *
                      </Label>
                      <Select value={moduleData.category} onValueChange={(value) => handleSelectChange('category', value)}>
                        <SelectTrigger className="w-full h-12 text-base">
                          <SelectValue placeholder="Select Category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="cybersecurity">Cybersecurity</SelectItem>
                          <SelectItem value="compliance">Compliance</SelectItem>
                          <SelectItem value="data-protection">Data Protection</SelectItem>
                          <SelectItem value="phishing">Phishing</SelectItem>
                          <SelectItem value="malware">Malware</SelectItem>
                          <SelectItem value="social-engineering">Social Engineering</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="contentType" className="text-base font-medium text-gray-700">
                        Content Type *
                      </Label>
                      <Select value={moduleData.contentType} onValueChange={(value) => handleSelectChange('contentType', value)}>
                        <SelectTrigger className="w-full h-12 text-base">
                          <SelectValue placeholder="Select Content Type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="video">Video</SelectItem>
                          <SelectItem value="quiz">Quiz</SelectItem>
                          <SelectItem value="article">Article</SelectItem>
                          <SelectItem value="interactive">Interactive</SelectItem>
                          <SelectItem value="simulation">Simulation</SelectItem>
                          <SelectItem value="assessment">Assessment</SelectItem>
                          <SelectItem value="mixed">Mixed Content</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="tag" className="text-base font-medium text-gray-700">
                        Tag *
                      </Label>
                      <Select value={moduleData.tag} onValueChange={(value) => handleSelectChange('tag', value)}>
                        <SelectTrigger className="w-full h-12 text-base">
                          <SelectValue placeholder="Select Tag" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="beginner">Beginner</SelectItem>
                          <SelectItem value="intermediate">Intermediate</SelectItem>
                          <SelectItem value="advanced">Advanced</SelectItem>
                          <SelectItem value="mandatory">Mandatory</SelectItem>
                          <SelectItem value="optional">Optional</SelectItem>
                          <SelectItem value="new-employee">New Employee</SelectItem>
                          <SelectItem value="annual-training">Annual Training</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="security" className="text-base font-medium text-gray-700">
                        Security Level *
                      </Label>
                      <Select value={moduleData.security} onValueChange={(value) => handleSelectChange('security', value)}>
                        <SelectTrigger className="w-full h-12 text-base">
                          <SelectValue placeholder="Select Security Level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="low">Low</SelectItem>
                          <SelectItem value="medium">Medium</SelectItem>
                          <SelectItem value="high">High</SelectItem>
                          <SelectItem value="critical">Critical</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="duration" className="text-base font-medium text-gray-700">
                        Duration (minutes)
                      </Label>
                      <Input
                        id="duration"
                        type="number"
                        name="duration"
                        value={moduleData.duration}
                        onChange={handleChange}
                        placeholder="0"
                        min={0}
                        className="w-full h-12 text-base"
                      />
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <Label htmlFor="industry" className="text-base font-medium text-gray-700">
                        Industry *
                      </Label>
                      <Select value={moduleData.industry} onValueChange={(value) => handleSelectChange('industry', value)}>
                        <SelectTrigger className="w-full h-12 text-base">
                          <SelectValue placeholder="Select Industry" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="finance">Finance</SelectItem>
                          <SelectItem value="healthcare">Healthcare</SelectItem>
                          <SelectItem value="technology">Technology</SelectItem>
                          <SelectItem value="manufacturing">Manufacturing</SelectItem>
                          <SelectItem value="retail">Retail</SelectItem>
                          <SelectItem value="education">Education</SelectItem>
                          <SelectItem value="government">Government</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="role" className="text-base font-medium text-gray-700">
                        Role *
                      </Label>
                      <Select value={moduleData.role} onValueChange={(value) => handleSelectChange('role', value)}>
                        <SelectTrigger className="w-full h-12 text-base">
                          <SelectValue placeholder="Select Role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all-employees">All Employees</SelectItem>
                          <SelectItem value="management">Management</SelectItem>
                          <SelectItem value="it-staff">IT Staff</SelectItem>
                          <SelectItem value="hr">HR</SelectItem>
                          <SelectItem value="finance">Finance</SelectItem>
                          <SelectItem value="sales">Sales</SelectItem>
                          <SelectItem value="customer-service">Customer Service</SelectItem>
                          <SelectItem value="executives">Executives</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="coreBehavior" className="text-base font-medium text-gray-700">
                        Core Behavior *
                      </Label>
                      <Select value={moduleData.coreBehavior} onValueChange={(value) => handleSelectChange('coreBehavior', value)}>
                        <SelectTrigger className="w-full h-12 text-base">
                          <SelectValue placeholder="Select Core Behavior" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="awareness">Security Awareness</SelectItem>
                          <SelectItem value="prevention">Threat Prevention</SelectItem>
                          <SelectItem value="response">Incident Response</SelectItem>
                          <SelectItem value="compliance">Compliance Adherence</SelectItem>
                          <SelectItem value="reporting">Threat Reporting</SelectItem>
                          <SelectItem value="best-practices">Best Practices</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="programResource" className="text-base font-medium text-gray-700">
                        Program Resource *
                      </Label>
                      <Select value={moduleData.programResource} onValueChange={(value) => handleSelectChange('programResource', value)}>
                        <SelectTrigger className="w-full h-12 text-base">
                          <SelectValue placeholder="Select Program Resource" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="onboarding">New Employee Onboarding</SelectItem>
                          <SelectItem value="annual">Annual Security Training</SelectItem>
                          <SelectItem value="refresher">Refresher Course</SelectItem>
                          <SelectItem value="specialized">Specialized Training</SelectItem>
                          <SelectItem value="compliance">Compliance Training</SelectItem>
                          <SelectItem value="certification">Certification Prep</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="completionTime" className="text-base font-medium text-gray-700">
                        Completion Time (minutes)
                      </Label>
                      <Input
                        id="completionTime"
                        type="number"
                        name="completionTime"
                        value={moduleData.completionTime}
                        onChange={handleChange}
                        placeholder="0"
                        min={0}
                        className="w-full h-12 text-base"
                      />
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="passingScore" className="text-base font-medium text-gray-700">
                        Passing Score (%) *
                      </Label>
                      <Input
                        id="passingScore"
                        type="number"
                        name="passingScore"
                        value={moduleData.passingScore}
                        onChange={handleChange}
                        placeholder="Enter passing score"
                        min={0}
                        max={100}
                        className="w-full h-12 text-base"
                        required
                      />
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="image" className="text-base font-medium text-gray-700">
                        Cover Image URL *
                      </Label>
                      <Input
                        id="image"
                        type="url"
                        name="image"
                        value={moduleData.image}
                        onChange={handleChange}
                        placeholder="https://example.com/image.jpg"
                        className="w-full h-12 text-base"
                        required
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          ) : (
            // Step 2: Content Creation
            <div className="max-w-6xl mx-auto">
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  Content Creation
                </h2>
                <p className="text-gray-600">
                  Add slides and content to your training module.
                </p>
              </div>

              {/* Add Content Buttons */}
              <div className="mb-8 p-6 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  Add Content
                </h3>
                <div className="flex flex-wrap gap-3">
                  <Button 
                    type="button" 
                    onClick={() => addSlide('quiz')} 
                    className="bg-purple-600 hover:bg-purple-700"
                  >
                    + Add Quiz
                  </Button>
                  <Button 
                    type="button" 
                    onClick={() => addSlide('video')} 
                    className="bg-red-600 hover:bg-red-700"
                  >
                    + Add Video
                  </Button>
                  <Button 
                    type="button" 
                    onClick={() => addSlide('image')} 
                    className="bg-green-600 hover:bg-green-700"
                  >
                    + Add Image
                  </Button>
                  <Button 
                    type="button" 
                    onClick={() => addSlide('ppt')} 
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    + Add PPT
                  </Button>
                </div>
              </div>

              {/* Slides */}
              <div className="space-y-6">
                {moduleData.slides.length === 0 ? (
                  <div className="text-center py-12 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
                    <div className="text-gray-400 text-lg mb-2">No content yet</div>
                    <div className="text-gray-500">Use the buttons above to add your first slide</div>
                  </div>
                ) : (
                  moduleData.slides.map((slide, index) => {
                    const commonProps = {
                      key: slide.id,
                      initialData: slide.data,
                      onChange: (data: Slide['data']) => updateSlide(index, data),
                      onRemove: () => removeSlide(index),
                      index: index + 1,
                    };
                    
                    return (
                      <div key={slide.id} className="border rounded-lg bg-white shadow-sm">
                        <div className="p-4 bg-gray-50 border-b">
                          <div className="flex items-center justify-between">
                            <h4 className="font-medium text-gray-900">
                              Slide {index + 1} - {slide.type.charAt(0).toUpperCase() + slide.type.slice(1)}
                            </h4>
                            <div className={`px-2 py-1 rounded text-xs font-medium ${
                              slide.type === 'quiz' ? 'bg-purple-100 text-purple-800' :
                              slide.type === 'video' ? 'bg-red-100 text-red-800' :
                              slide.type === 'image' ? 'bg-green-100 text-green-800' :
                              'bg-blue-100 text-blue-800'
                            }`}>
                              {slide.type.toUpperCase()}
                            </div>
                          </div>
                        </div>
                        <div className="p-4">
                          {(() => {
                            switch (slide.type) {
                              case 'quiz': return <AddQuizSlide {...commonProps} />;
                              case 'video': return <AddVideoSlide {...commonProps} />;
                              case 'image': return <AddImageSlide {...commonProps} />;
                              case 'ppt': return <AddPptSlide {...commonProps} />;
                              default: return null;
                            }
                          })()}
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="border-t bg-gray-50 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-500">
              {currentStep === 1 ? (
                "Fill in the basic information to continue"
              ) : (
                `${moduleData.slides.length} slide${moduleData.slides.length !== 1 ? 's' : ''} added`
              )}
            </div>
            
            <div className="flex items-center space-x-3">
              {currentStep === 2 && (
                <Button
                  variant="outline"
                  onClick={handlePrevStep}
                  className="flex items-center space-x-2"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Back</span>
                </Button>
              )}
              
              {currentStep === 1 ? (
                <Button
                  onClick={handleNextStep}
                  className="flex items-center space-x-2"
                >
                  <span>Continue</span>
                  <ChevronRight className="w-4 h-4" />
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  className="bg-green-600 hover:bg-green-700"
                  disabled={moduleData.slides.length === 0}
                >
                  Create Module
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTrainingModule;