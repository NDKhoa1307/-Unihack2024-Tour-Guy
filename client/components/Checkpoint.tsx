import {Pressable, StyleSheet, View} from "react-native";
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
        <View style={styles.checkpoint}>
            <Pressable onPress={onPress}>
                <MaterialIcons
                    name={'location-pin'} color={color} size={36}
                    style={{
                        top: y, left: x
                    }}/>
            </Pressable>
        </View>
    )
}
const styles = StyleSheet.create({
    checkpoint: {
        position: 'absolute',
    },
})

