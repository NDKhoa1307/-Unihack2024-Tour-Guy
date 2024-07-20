import {StyleSheet, View, Text, Image, StatusBar} from 'react-native';

import {useState} from "react";
import CheckpointModal from "@/components/app_components/CheckpointModal";
import {MaterialIcons} from "@expo/vector-icons";
import Checkpoint from "@/components/reusable_component/Checkpoint";
import TopBar from '@/components/app_components/TopBar';

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
            <TopBar search={search} updateSearch={updateSearch}></TopBar>
            {/* TODO: Replace these below with the true Google Map */}
            <Image
                source={require('@/assets/images/placeholder_map.png')}
                style={{width: '100%', height: '100%'}}>
            </Image>
            <Checkpoint x={200} y={290} color={'red'} onPress={HandleModalPress} />
            {/*TODO: Before show the modal, pass the correct props to it*/}
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

})