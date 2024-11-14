import { createContext, useCallback, useContext, useEffect, useMemo, useReducer, useRef } from "react"

const CharactersContext = createContext();

export function CharactersProvider({ children }) {
    const [characters, dispatch] = useReducer(charactersReducer, [])
    const nextPage = useRef(null);
    const isLoading = useRef(false);

    const loadCharacters = useCallback(async () => {
        console.log('loadCharacters called')
        if (isLoading.current) { return };
        isLoading.current = true;
        const url = nextPage.current === null ? 'https://rickandmortyapi.com/api/character' : nextPage.current
        const response = await fetch(url)
        if (response.ok) {
            const jsonResponse = await response.json()            
            if (nextPage.current === null) {
                dispatch({type: 'SET_CHARACTERS', characters: jsonResponse.results})
            } else {
                dispatch({ type: 'ADD_CHARACTERS', characters: jsonResponse.results})
            }
            nextPage.current = jsonResponse.info.next
        } else {
            console.log('fetching failed')
            console.log(response.statusText)
        }
        isLoading.current = false;
    }, [isLoading, nextPage])

    useEffect(()=>{
        console.log('useEffect called')
        loadCharacters()
    },[loadCharacters])

    const contextValue = useMemo(() => ({characters, loadCharacters}), [characters, loadCharacters]);

    return (
        <CharactersContext.Provider value={contextValue}>
            {children}
        </CharactersContext.Provider>
    )
}

export function useCharacters() {
    return useContext(CharactersContext)
}

export const initialCharacters = [
    { id: 1, name: 'Rick Sanchez', species: 'Human', image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'},
    { id: 2, name: 'Morty Smith', species: 'Human', image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg'},
    { id: 3, name: 'Summer Smith', species: 'Human', image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg'},
]

function charactersReducer(characters, action) {
    switch (action.type) {
        case 'SET_CHARACTERS':
            return action.characters
        case 'ADD_CHARACTERS':
            return [...characters, ...action.characters]
        default: 
            return characters
    }
}
