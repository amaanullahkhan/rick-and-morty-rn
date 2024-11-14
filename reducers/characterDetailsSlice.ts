import { createSlice } from "@reduxjs/toolkit";

interface CharacterDetails {
    id: number
    name: string
    species: string,
    image: string,
}

const initialState: CharacterDetails | null = null

export const characterDetailsSlice = createSlice({
    name: 'characterDetails',
    initialState: initialState,
    reducers: {
        setCharacterDetails: (_, action) => {
            console.log('setCharacterDetails', action.payload.name)
            return action.payload
        },
        resetCharacterDetails: (_) => {
            console.log('resetCharacterDetails')
            return initialState
        }
    }
})

export const { setCharacterDetails, resetCharacterDetails } = characterDetailsSlice.actions

export const characterDetailsReducer = characterDetailsSlice.reducer