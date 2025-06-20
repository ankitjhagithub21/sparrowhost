'use client';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addModule, ImageData, PPTData, QuizData, SlideType, VideoData } from '@/lib/features/modules/moduleSlice';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { X, ChevronLeft, ChevronRight, Upload } from 'lucide-react';
import AddQuizSlide from './slides/AddQuizSlide';
import AddImageSlide from './slides/AddImageSlide';
import AddVideoSlide from './slides/AddVideoSlide';
import AddPptSlide from './slides/AddPptSlide';

import { Slide, Module } from '@/lib/features/modules/moduleSlice';


// Predefined data for select fields
const coreBehaviors: string[] = [
  "Social Engineering",
  "Malware",
  "Removable Media",
  "Physical Security",
  "Working Remotely",
  "Mobile Security",
  "Safe Web Browsing",
];

const contentTypes: string[] = [
  "Assessment",
  "Training Module",
  "Live-Action Video",
  "Publishing Assistant Module",
  "Program Resource",
  "Game",
];

const languages = [
  { label: "Arabic", value: "ar" },
  { label: "Hindi - HI", value: "HI" },
  { label: "Urdu - UR", value: "UR" },
  { label: "Swedish", value: "sv" },
  { label: "Slovenian - SL", value: "sl" },
  { label: "Romanian", value: "ro" },
  { label: "Slovak", value: "sk" },
  { label: "Spanish", value: "es" },
  { label: "Lithuanian", value: "lt" },
  { label: "Latvian", value: "lv" },
  { label: "Portuguese", value: "pt" },
  { label: "Italian", value: "it" },
  { label: "Polish", value: "pl" },
  { label: "Irish", value: "ga" },
  { label: "Hungarian", value: "hu" },
  { label: "French", value: "fr" },
  { label: "German", value: "de" },
  { label: "Greek", value: "el" },
  { label: "Czech", value: "cs" },
  { label: "Estonian", value: "et" },
  { label: "Dutch", value: "nl" },
  { label: "Finnish", value: "fi" },
  { label: "Danish", value: "da" },
  { label: "English", value: "en" },
];

const categories: string[] = [
  "Administrative Modules",
  "Advanced Cybersecurity and Risk Management",
  "Compliance",
  "GDPR",
  "K-12",
  "Malware & Phishing",
  "Mobile Security",
  "Network Security",
  "Password Security",
  "Personnel Security",
  "Physical Security & Hardware",
  "Privacy and Data Protection",
  "Secure Application Development",
  "Social Engineering",
  "Web-Based Threats",
];

const roles: string[] = [
  "Customer service",
  "Developers",
  "Executives",
  "Finance",
  "General",
  "Human Resources",
  "IT Staff",
  "Managers",
  "Privileged users",
];

const industries: string[] = [
  "Critical Infrastructure",
  "Education",
  "Financial Services",
  "Government",
  "Healthcare",
  "Manufacturing",
  "Not for Profit",
  "Other",
  "Retail",
  "Technology",
];

const durations: string[] = [
  "Under 2 Minutes",
  "2-5 Minutes",
  "5-10 Minutes",
  "Over 10 Minutes",
];

const tags: string[] = [
  "Acceptable Use Policy",
  "Access Control",
  "Accessible",
  "AI",
  "Antivirus",
  "API",
  "App Permissions",
  "APT",
  "Attachments",
  "Attack Prevention",
  "Authentication",
  "Backups",
  "Bank Secrecy Act",
  "Banking Trojans",
  "Basic Information",
  "Business Email Compromise",
  "C-I-A Triad",
  "C-TPAT",
  "CCPA",
  "CJI",
  "Cloud Security",
  "CMMC",
  "COPPA",
  "Core Concepts",
  "CPNI",
  "Cross-Site Scripting",
  "CSAM",
  "CSRF",
  "Cybersecurity",
  "Cybersecurity Awareness Month",
  "Data Destruction",
  "Data Disclosure",
  "Data Disposal",
  "Data Protection",
  "Data Storage",
  "Deserialization",
  "Device Theft",
  "DFARS",
  "EAL",
  "Educator",
  "Email",
  "Encryption",
  "Error Handling",
  "FAR Code of Conduct",
  "FCPA",
  "FERPA",
  "FINRA",
  "Firewall",
  "Fraud Prevention",
  "FTI",
  "GDPR",
  "GLBA",
  "Hacked for the Holidays",
  "Hacker Headlines",
  "HIPAA",
  "HITECH",
  "Host Name",
  "HTTPS",
  "Identity Theft",
  "Incident Response",
  "Infringement Risks",
  "Injection Flaws",
  "Insider Threat",
  "Intellectual Property",
  "Interactive",
  "Introduction",
  "IoT Security",
  "Just the Facts",
  "K-12",
  "Legislation",
  "License agreement",
  "Links",
  "Live Action",
  "Logging and Monitoring",
  "Malware",
  "Manager",
  "Marine Lowlifes",
  "Medical Devices",
  "Microlearning",
  "Misconfiguration",
  "Mobile Security",
  "Money Laundering",
  "Multi-Factor Authentication",
  "Need to Know: Season 1",
  "Need to Know: Season 2",
  "Network Security",
  "NIST",
  "Organizational Policy",
  "OWASP",
  "Password Security",
  "PCI",
  "Permissions",
  "Personal Data",
  "PHI",
  "Phishing",
  "Physical Security",
  "Pick Your Path",
  "PII",
  "Pretexting",
  "Privacy",
  "Proper Disposal",
  "Public Networks",
  "Ransomware",
  "Red Flags Rule",
  "Regulation",
  "Remote Access",
  "Removable Media",
  "Report Attacks",
  "Role-Based Training",
  "Safe Browsing",
  "Safe Data Handling",
  "Sarbanes-Oxley Act",
  "Secure Coding",
  "Secure Connection",
  "Security Champions",
  "Security Policy",
  "Session Management",
  "Smart Devices",
  "SMS Phishing",
  "Social Engineering",
  "Social Media",
  "Spam",
  "Spearphishing",
  "Spoofed domains",
  "SSID",
  "Tailgating",
  "Travel Security",
  "Updates and Patches",
  "Vishing",
  "Whaling",
  "Wi-Fi",
  "Work Bytes",
  "WORKed",
  "Working Remotely",
  "XXE",
];

const programResources: string[] = [
  "Emails",
  "Infographics",
  "Newsletters",
  "Posters",
  "Program plans and kits",
];

const securityLevels: string[] = [
  "Low",
  "Medium",
  "High",
  "Critical"
];

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

  const addSlide = (type: SlideType) => {
    let newSlide: Slide;

    if (type === 'quiz') {
      newSlide = {
        id: Date.now().toString(),
        type,
        data: {
          question: '',
          options: ['', '', '', ''],
          correctAnswer: 0,
          answerDescription: '',
        },
      };
    } else if (type === 'video') {
      newSlide = {
        id: Date.now().toString(),
        type,
        data: {
          videoUrl: '',
          title: '',
          description: '',
        },
      };
    } else if (type === 'image') {
      newSlide = {
        id: Date.now().toString(),
        type,
        data: {
          title: '',
          fakeImageUrl: '',
          realImageUrl: '',
        },
      };
    } else {
      newSlide = {
        id: Date.now().toString(),
        type,
        data: {
          pptUrl: '',
        },
      };
    }

    setModuleData((prev) => ({
      ...prev,
      slides: [...prev.slides, newSlide],
    }));
  };

  const updateSlide = (index: number, data: Slide['data']) => {
    const updated = [...moduleData.slides];
    const currentSlide = updated[index];

    function isQuizData(data: Slide['data']): data is QuizData {
      return typeof (data as QuizData).question === 'string';
    }

    function isVideoData(data: Slide['data']): data is VideoData {
      return typeof (data as VideoData).videoUrl === 'string';
    }

    function isImageData(data: Slide['data']): data is ImageData {
      return typeof (data as ImageData).fakeImageUrl === 'string';
    }

    function isPPTData(data: Slide['data']): data is PPTData {
      return typeof (data as PPTData).pptUrl === 'string';
    }

    if (
      (currentSlide.type === 'quiz' && isQuizData(data)) ||
      (currentSlide.type === 'video' && isVideoData(data)) ||
      (currentSlide.type === 'image' && isImageData(data)) ||
      (currentSlide.type === 'ppt' && isPPTData(data))
    ) {
      updated[index] = { ...currentSlide, data } as Slide;
      setModuleData({ ...moduleData, slides: updated });
    } else {
      console.error('Data type does not match slide type');
    }
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

  const handleNextStep = () => {
    setCurrentStep(2)
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
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${currentStep >= 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                1
              </div>
              <div className="w-8 h-1 bg-gray-200">
                <div className={`h-full bg-blue-600 transition-all duration-300 ${currentStep >= 2 ? 'w-full' : 'w-0'
                  }`}></div>
              </div>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${currentStep >= 2 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
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
                        className="w-full h-10 text-base"
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
                          {languages.map((lang) => (
                            <SelectItem key={lang.value} value={lang.value}>
                              {lang.label}
                            </SelectItem>
                          ))}
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
                          {categories.map((category) => (
                            <SelectItem key={category} value={category}>
                              {category}
                            </SelectItem>
                          ))}
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
                          {contentTypes.map((type) => (
                            <SelectItem key={type} value={type}>
                              {type}
                            </SelectItem>
                          ))}
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
                          {tags.map((tag) => (
                            <SelectItem key={tag} value={tag}>
                              {tag}
                            </SelectItem>
                          ))}
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
                          {securityLevels.map((level) => (
                            <SelectItem key={level} value={level}>
                              {level}
                            </SelectItem>
                          ))}
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
                        className="w-full h-10 text-base"
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
                          {industries.map((industry) => (
                            <SelectItem key={industry} value={industry}>
                              {industry}
                            </SelectItem>
                          ))}
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
                          {roles.map((role) => (
                            <SelectItem key={role} value={role}>
                              {role}
                            </SelectItem>
                          ))}
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
                          {coreBehaviors.map((behavior) => (
                            <SelectItem key={behavior} value={behavior}>
                              {behavior}
                            </SelectItem>
                          ))}
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
                          {programResources.map((resource) => (
                            <SelectItem key={resource} value={resource}>
                              {resource}
                            </SelectItem>
                          ))}
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
                        className="w-full h-10 text-base"
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
                        className="w-full h-10 text-base"
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
                        className="w-full h-10 text-base"
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
                    return (
                      <div key={slide.id} className="border p-4 rounded-lg bg-white shadow-sm">

                        {(() => {
                          switch (slide.type) {
                            case 'quiz':
                              return (
                                <AddQuizSlide
                                  initialData={slide.data}
                                  onChange={(data) => updateSlide(index, data)}
                                  onRemove={() => removeSlide(index)}
                                  index={index}
                                />
                              );
                            case 'video':
                              return (
                                <AddVideoSlide
                                  initialData={slide.data}
                                  onChange={(data) => updateSlide(index, data)}
                                  onRemove={() => removeSlide(index)}
                                  index={index}
                                  
                                />
                              );
                            case 'image':
                              return (
                                <AddImageSlide
                                  initialData={slide.data}
                                  onChange={(data) => updateSlide(index, data)}
                                  onRemove={() => removeSlide(index)}
                                  index={index}
                                  
                                />
                              );
                            case 'ppt':
                              return (
                                <AddPptSlide
                                  initialData={slide.data}
                                  onChange={(data) => updateSlide(index, data)}
                                  onRemove={() => removeSlide(index)}
                                  index={index}
                                 
                                />
                              );
                            default:
                              return null;
                          }
                        })()}

                        <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-200 mt-4">
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