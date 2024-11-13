import { createContext, useContext, useMemo, useReducer } from "react"

const CharactersContext = createContext([]);

export function CharactersProvider({ children }) {
    const [characters, dispatch] = useReducer(charactersReducer, initialCharacters)
    const contextValue = useMemo(() => characters, [characters]);
    return (
        <CharactersContext.Provider value={contextValue}>
            {children}
        </CharactersContext.Provider>
    )
}

export function useCharacters() {
    return useContext(CharactersContext)
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
