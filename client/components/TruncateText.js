import {Platform, Text, View} from "react-native";
import React, {useState} from "react";

export default function TruncateText({children, numberOfLines, ...props}) {
    const [textShown, setTextShown] = useState(false); //To show ur remaining Text
    const [lengthMore, setLengthMore] = useState(false); //to show the "Read more & Less Line"
    const toggleNumberOfLines = () => { //To toggle the show text or hide it
        setTextShown(!textShown);
    }
    const onLayout = (e => {
        if (Platform.OS !== 'ios') {
            let lines = e.nativeEvent.layout.height / 19; // the height of the text / the
            // height of one line
            // alert(lines);
            setLengthMore(lines >= numberOfLines); //to check the text is more than 4 lines or not
        }
    });
    const onTextLayout = (e) => {
        if (Platform.OS === 'ios') {
            // alert(e.nativeEvent.lines.length);
            setLengthMore(e.nativeEvent.lines.length >= numberOfLines);
        }
    }

    return (
        <View>
            <Text
                onLayout={onLayout}
                onTextLayout={onTextLayout}
                numberOfLines={textShown ? undefined : numberOfLines}
                {...props} // Inherit any props passed to it; like styles and children
            >
                {children}
            </Text>
            {
                lengthMore ?
                    <Text
                        style={{color: '#7895B2'}}
                        onPress={toggleNumberOfLines}>
                        {textShown ? 'Read less...' : 'Read more...'}
                    </Text>
                    : null
            }
        </View>
    );

}