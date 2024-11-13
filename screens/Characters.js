import { FlatList, Pressable } from "react-native";
import Character from "../components/Character";
import { useNavigation } from "@react-navigation/core";
import { useEffect } from "react";
import { useCharacters } from "../reducers/characters";


export default function Characters() {
    const [characters] = useCharacters();
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
        keyExtractor={(item) => item.id}
        renderItem={({item, index})=>{
          return (
            <Pressable onPress={() => { navigation.navigate('CharacterDetails', {index: index} ) }}>
                <Character {...item}/>                
            </Pressable>
          );
        }}
        ></FlatList>
      );   
}