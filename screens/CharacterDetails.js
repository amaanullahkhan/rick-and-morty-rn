import { View, Image, Text } from "react-native";
import { characters } from "./Characters";
import { useEffect } from "react";

export default function CharacterDetails({ navigation, route }) {
    const { index } = route.params
    const { name, species, image } = characters[index]
    useEffect(()=>{
        navigation.setOptions({ headerTransparent: true })
    }, [])
    return (
        <View>
            <Image 
                source={{uri: image}}
                style={{width: '100%', aspectRatio: 1}}
                borderRadius={40}
                resizeMode="cover"                
            >
            </Image>
            <View style={{padding: 20}}>
                <Text style={{fontWeight: 'bold', fontSize: 28}}>{name}</Text>
                <Text>{species}</Text>
            </View>
        </View>
    );
}