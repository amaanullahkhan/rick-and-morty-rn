import { FlatList, Pressable } from "react-native";
import Character from "../components/Character";
import { useNavigation } from "@react-navigation/core";
import React, { useEffect } from "react";
import { CharactersProvider, useCharacters } from "../reducers/characters";


export default function Characters() {
    return <CharactersProvider>
        <CharactersPage />
    </CharactersProvider>
}

function CharactersPage() {
    const {characters, loadMore} = useCharacters();
    const navigation = useNavigation()
    useEffect(()=>{
        navigation.setOptions({ title: 'Characters', headerLargeTitle: true })
    }, [])

    const handleEndReached = async () => {
        console.log('End Reached')
        if (loadMore) {
            try {
                await loadMore()
            }
            catch (error) {
                console.error('Error loading more characters:', error);
            }
        }
    }

    return (
        <FlatList       
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={{
          padding: 20,
          gap: 8,
        }}
        data={characters}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item, index})=>{
          return (
            <RenderCharacter 
                item={item}
                onPress={() => { navigation.navigate('CharacterDetails', {index: index} ) }}>                               
            </RenderCharacter>
          );
        }}
        onEndReached={handleEndReached}
        onEndReachedThreshold={0.2}
        ></FlatList>
      );   
}

const RenderCharacter = React.memo(({ item, onPress }) => (
    <Pressable onPress={onPress}>
        <Character {...item} />
    </Pressable>
));