'use client';

import { configureStore } from '@reduxjs/toolkit';
import exampleReducer from './Features/example/exampleSlice';


export const store = configureStore({
    reducer: {
        exampleSlice: exampleReducer,
    }
})

export const RootState = store.getState;
export const AppDispatch = store.dispatch;
