import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface QuizData {
  question: string;
  options: string[];
  correctAnswer:number;
  answerDescription: string;
}

export type SlideType = 'quiz' | 'video' | 'image' | 'ppt';

export interface VideoData {
  title: string;
  description: string;
  videoUrl: string;
}

export interface ImageData {
  title: string;
  fakeImageUrl: string;
  realImageUrl: string;
}

export interface PPTData {
  pptUrl: string;
}

export type Slide =
  | { id: string; type: 'quiz'; data: QuizData }
  | { id: string; type: 'video'; data: VideoData }
  | { id: string; type: 'image'; data: ImageData }
  | { id: string; type: 'ppt'; data: PPTData };
  

export interface Module {
  id: string;
  moduleName: string;
  language:string;
  coreBehavior:string;
  completionTime:number;
  role:string;
  tag:string;
  programResource:string;
  contentType:string;
  passingScore: number;
  category: string;
  coverImage: string;
  duration: string;
  industry:string;
  security:string;
  slides: Slide[];
   
}

interface ModuleState {
  modules: Module[];
}

const initialState: ModuleState = {
  modules: [
    {
      id: '1',
      moduleName: "My module",
      completionTime: 10,
      language: 'hindi',
      coreBehavior: 'malware',
      contentType: 'Assessment',
      role: 'developer',
      industry: 'retail',
      passingScore: 80,
      programResource: 'infographics',
      category: 'international',
      tag: 'accessible',
      coverImage: 'https://images.unsplash.com/photo-1743930285895-ce090ae2a115?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D',
      duration: '5-10 minute',
      security: 'high', 
      slides: [
        {
          id: '101',
          type: 'quiz',
          data: {
            question: 'This is my question',
            options: ['option 1', 'option 2', 'option 3', 'option 4'],
            correctAnswer: 1,
            answerDescription: 'this is my description',
          },
        },
        {
          id: '102',
          type: 'video',
          data: {
            title: 'this is video title',
            description: 'this is video description',
            videoUrl: 'this is a video url',
          },
        },
        {
          id: '103',
          type: 'image',
          data: {
            title: 'this is image comparison',
            fakeImageUrl: 'https://images.unsplash.com/photo-1750087328910-16dd862838eb?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            realImageUrl: 'https://images.unsplash.com/photo-1750086719448-b52e934c4ef8?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          },
        },
        {
          id: '104',
          type: 'ppt',
          data: {
            pptUrl: "https://docs.google.com/presentation/d/e/2PACX-1vTwQXX60pB7SkU2UzHmpGnorVLOn2d64FtP5yybj56TuOXxHr3q7zxbhjGhp3DDiolEZIQXrzV5ylgo/pubembed?start=false&loop=false&delayms=3000",
          },
        },
      ],
    }
  ]
};


const moduleSlice = createSlice({
  name: 'module',
  initialState,
  reducers: {
    addModule: (state, action: PayloadAction<Module>) => {
      state.modules.push(action.payload);
    },
    removeModule: (state, action: PayloadAction<string>) => {
      state.modules = state.modules.filter((m) => m.id !== action.payload);
    },
  },
});

export const { addModule, removeModule } = moduleSlice.actions;
export const selectModules = (state: { module: ModuleState }) => state.module.modules;
export default moduleSlice.reducer;
