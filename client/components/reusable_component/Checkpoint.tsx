import {Pressable, StyleSheet, View, Text} from "react-native";
import {MaterialIcons} from "@expo/vector-icons";

interface CheckPointProps {
    x: number;
    y: number;
    color: string;
    onPress: () => void;
}


export default function Checkpoint({x, y, color, onPress}: CheckPointProps) {
    return (
        // This is just a placeholder
        // TODO: Use an actual map and implement the logic to create markers
        <View style={[styles.checkpoint, {top: y, left: x}]}>
            <View style={{
                backgroundColor: 'white',
                padding: 6,
                borderRadius: 8,
            }}>
                <Text>Nice beach</Text>
                <Text>18:00 - 20:00</Text>
            </View>
            <Pressable onPress={onPress}>
                <MaterialIcons
                    name={'location-pin'} color={color} size={36}
                    style={{

                    }}/>
            </Pressable>
        </View>
    )
}
const styles = StyleSheet.create({
    checkpoint: {
        position: 'absolute',
        flexDirection: 'column',
        alignItems: 'center',
    },
})

