import {StyleSheet, View, Text, Pressable, ImageBackground, Image, useColorScheme, StatusBar} from 'react-native';

import {useState} from "react";
import CheckpointModal from "@/components/CheckpointModal";
import {MaterialIcons} from "@expo/vector-icons";
import Checkpoint from "@/components/Checkpoint";
import {SearchBar} from "@rneui/base";

export default function HomeScreen() {
    const [showModal, setShowModal] = useState(false);
    const [search, setSearch] = useState("");
    const updateSearch = (search: any) => {
        console.log('Searching: ' + search);
        setSearch(search);
    };
    const HandleModalPress = () => {
        setShowModal(!showModal);
    }

    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
                <SearchBar
                    style={styles.searchBar}
                    inputContainerStyle={styles.searchBarInputContainer}
                    containerStyle={styles.searchBarContainer}
                    inputStyle={styles.searchBarInput}
                    placeholder="Type Here..."
                    onChangeText={updateSearch}
                    value={search}
                />
                <View style={styles.currentLocation}>
                    <Text>169, Đường, Quận, Huyện, Thành Phố</Text>
                </View>
            </View>
            <Image
                source={require('@/assets/images/placeholder_map.png')}
                style={{width: '100%', height: '100%'}}>
            </Image>
            <Checkpoint x={200} y={340} color={'red'} onPress={HandleModalPress}/>
            {showModal && (
                <CheckpointModal isVisible={showModal} onClose={HandleModalPress}>
                    <Text>TODO: We should pass some props here instead</Text>
                </CheckpointModal>
            )}
            <StatusBar />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative'
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 12,
        marginTop: 6,
        borderColor: '#0a7ea4',
        borderWidth: 1,
        shadowColor: 'black',
        shadowRadius: 2,
        backgroundColor: '#fff',
    },
    topBar: {
        position: 'absolute',
        width: '100%',
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        top: 20,
        zIndex: 3,
    },
    searchBar: {
        backgroundColor: 'white',
        width: '100%',
    },
    searchBarInput: {
        backgroundColor: 'white',
        fontSize: 16,
    },
    searchBarInputContainer: {
        backgroundColor: 'white',
        borderRadius: 18,
    },
    searchBarContainer: {
        width: '80%',
        backgroundColor: 'transparent',
        borderColor : 'white',
        borderTopWidth: 0,
        borderBottomWidth: 0,
        borderRadius: 24,
    },
    currentLocation: {

    },

})