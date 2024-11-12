import { View, Text, Image } from "react-native";

export default function Character(character) {
    const { name, species, image } = character
    return (
        <View style={{
          gap: 8,
          flexDirection: 'row',
          padding: 12,
          borderRadius: 12,
          backgroundColor: 'rgba(0,0,255.0,0.2)'
        }}>
          <Image 
            source={{uri: image}}
            width={80}
            height={80}
            borderRadius={12}
            resizeMode="cover"
          ></Image>
    
          <View
            style={{
              flexDirection: 'column'
            }}
          >
            <Text style={{fontWeight: 'bold'}}>{name}</Text>
            <Text>{species}</Text>
          </View>
    
        </View>
      );
}