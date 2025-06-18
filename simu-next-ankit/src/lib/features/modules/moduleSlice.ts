// store/moduleSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Slide {
  id: string;
  type: 'quiz' | 'video' | 'image' | 'ppt';
  data: object;
}

interface Module {
  id: string;
  moduleName: string;
  passingScore: number;
  category: string;
  image: string;
  duration: number;
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
      passingScore: 80,
      category: 'international',
      image: 'https://images.unsplash.com/photo-1743930285895-ce090ae2a115?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D',
      duration: 10000,
      slides: [
        {
          id: '101',
          type: 'quiz',
          data: {
            question: 'This is my question',
            options: ['option 1', 'option 2', 'option 3', 'option 4'],
            correctAnswer: 'option 1',
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
            fakeImageUrl: 'this is a fake Image url',
            realImageUrl: 'this is a real image Url',
          },
        },
        {
          id: '104',
          type: 'ppt',
          data: {
            pptUrl: "This is ppt url",
          },
        },
      ],
    },
    {
      id: '2',
      moduleName: "My module 2",
      passingScore: 70,
      category: 'international',
      image: 'https://images.unsplash.com/photo-1744019960830-eb79b2528f8e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      duration: 10000,
      slides: [
        {
          id: '101',
          type: 'quiz',
          data: {
            question: 'This is my question',
            options: ['option 1', 'option 2', 'option 3', 'option 4'],
            correctAnswer: 'option 1',
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
            fakeImageUrl: 'this is a fake Image url',
            realImageUrl: 'this is a real image Url',
          },
        },
        {
          id: '104',
          type: 'ppt',
          data: {
            pptUrl: "This is ppt url",
          },
        },
      ],
    },
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
