import { View, Image, Text } from "react-native";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";

export default function CharacterDetails({ navigation }) {
    const { name, species, image } = useSelector((state: RootState) => state.characterDetails);
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
            />
            <View style={{padding: 20}}>
                <Text style={{fontWeight: 'bold', fontSize: 28}}>{name}</Text>
                <Text>{species}</Text>
            </View>
        </View>
    );
}