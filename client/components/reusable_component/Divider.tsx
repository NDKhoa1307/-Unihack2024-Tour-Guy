import {View} from "react-native";

export default function Divider({color, height} : {color: string, height: number}) {
    return (
        <View style={{
            width: '100%',
            height: height,
            backgroundColor: color,
            marginVertical: 12,
        }}/>
    )

}