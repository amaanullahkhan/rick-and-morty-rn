import { FlatList, Pressable } from "react-native";
import Character from "../components/Character";
import { useNavigation } from "@react-navigation/core";
import { useEffect } from "react";


export const characters = [
    { id: 1, name: 'Rick Sanchez', species: 'Human', image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'},
    { id: 2, name: 'Morty Smith', species: 'Human', image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg'},
    { id: 3, name: 'Summer Smith', species: 'Human', image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg'},
]

export default function Characters() {
    const navigation = useNavigation()
    useEffect(()=>{
        navigation.setOptions({ title: 'Characters', headerLargeTitle: true })
    }, [])
    return (
        <FlatList       
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={{
          padding: 20,
          gap: 8,
        }}
        data={characters}
        keyExtractor={(item)=>item.id}
        renderItem={({item})=>{
          return (
            <Pressable onPress={()=>{ navigation.navigate('CharacterDetails') }}>
                <Character {...item}/>
            </Pressable>
          );
        }}
        ></FlatList>
      );   
}