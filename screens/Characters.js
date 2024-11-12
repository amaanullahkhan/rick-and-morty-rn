import { FlatList, Pressable } from "react-native";
import Character from "../components/Character";


const characters = [
    { id: 1, name: 'Rick Sanchez', species: 'Human', image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'},
    { id: 2, name: 'Morty Smith', species: 'Human', image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg'},
    { id: 3, name: 'Summer Smith', species: 'Human', image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg'},
]

export default function Characters() {
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
            <Character {...item}/>
          );
        }}
        ></FlatList>
      );   
}