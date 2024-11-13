import { useReducer } from "react"

export function useCharacters() {
    return useReducer(charactersReducer, initialCharacters)
}

export const charactersAction = {
    
}

export const initialCharacters = [
    { id: 1, name: 'Rick Sanchez', species: 'Human', image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'},
    { id: 2, name: 'Morty Smith', species: 'Human', image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg'},
    { id: 3, name: 'Summer Smith', species: 'Human', image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg'},
]

function charactersReducer(characters, action) {
    return characters
}