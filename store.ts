import {configureStore } from '@reduxjs/toolkit';
import { characterDetailsReducer } from './reducers/characterDetailsSlice';

export const store = configureStore({
    reducer: {
        characterDetails: characterDetailsReducer
     }
})

export type RootState = ReturnType<typeof store.getState>
