import {
    View,
    Text,
    Pressable,
    StyleSheet,
    Animated,
    Image,
    ScrollView,
    SafeAreaView,
    Button, TouchableOpacity
} from "react-native";
import Modal from 'react-native-modal'
import React, {useCallback, useState} from "react";
import {FontAwesome, FontAwesome5, MaterialIcons} from "@expo/vector-icons";
import {Collapsible} from "@/components/reusable_component/Collapsible";
import Divider from "@/components/reusable_component/Divider";
import {number} from "prop-types";
import SizedBox from "@/components/reusable_component/SizedBox";
import TruncateText from "@/components/reusable_component/TruncateText";
import ReadMore from "react-native-read-more-text";
import MyButton from "@/components/reusable_component/MyButton";

interface CheckpointModalProps {
    isVisible: boolean;
    onClose: () => void;
    children: React.ReactNode;
}


export default function CheckpointModal({isVisible, onClose, children}: CheckpointModalProps) {

    const destPic = require('@/assets/images/tempDest.png');
    return (
        <Modal
            style={styles.modalStyles}
            backdropOpacity={0.6}
            animationIn="slideInUp"
            animationOut="slideOutDown"
            animationInTiming={300}
            animationOutTiming={300}
            backdropTransitionInTiming={300}
            backdropTransitionOutTiming={0}
            onSwipeComplete={onClose}
            swipeDirection="down"
            propagateSwipe={true}
            isVisible={isVisible}
            // useNativeDriver={true}
            onBackdropPress={onClose}
        >
            {/*TODO: Use the props to handle these value instead*/}
            {/*TODO: Put these in another component instead ?*/}
            <View style={styles.modalContent}>
                {/* Header */}
                <View style={styles.titleContainer}>
                    <View style={styles.modalHeader}>
                        <Text style={styles.title}>A nice tourist destination</Text>
                        <Text style={styles.headerPoints}>(100 Points)</Text>
                        <Text style={styles.headerAddress}>169 Đường, Quận, Thành Phố</Text>
                    </View>
                    <Pressable onPress={onClose} style={styles.closeModal}>
                        <MaterialIcons name="close" size={36}/>
                    </Pressable>
                    <Pressable onPress={() => {alert('Add to bookmark')}} style={styles.bookmarkIcon}>
                        <MaterialIcons name="bookmark-outline" size={36}/>
                    </Pressable>
                </View>
                <ScrollView style={{width: '100%'}}>
                    <TouchableOpacity activeOpacity={1}>
                        {/* Picture */}
                        <Image source={destPic} style={styles.destPic}/>
                        <Divider color={'black'} height={1}/>
                        <Collapsible title={'Opening time'}>
                            <Text>Monday - Friday: 8:00 - 18:00</Text>
                            <Text>Saturday - Sunday: 9:00 - 17:00</Text>
                        </Collapsible>
                        <Divider color={'black'} height={1}/>

                        {/* Etiquette*/}
                        <Collapsible title={'Recommended etiquette'}>
                            <View style={styles.etiquetteContainer}>

                                <View style={styles.etiquetteColumn}>
                                    <Text style={styles.etiquetteTitleDo}>Do's</Text>
                                    <Text>Be friendly to others</Text>
                                    <Text>Try to socialize</Text>
                                    <Text>Try to be quiet</Text>
                                </View>

                                <View style={styles.etiquetteColumn}>
                                    <Text style={styles.etiquetteTitleDont}>Don'ts</Text>
                                    <Text>Don't litter</Text>
                                    <Text>Don't be rude</Text>
                                    <Text>Don't point fingers</Text>
                                    <Text>Don't take pictures of others without permission</Text>
                                </View>
                            </View>
                        </Collapsible>
                        <Divider color={'black'} height={1}/>

                        <Collapsible title={'Useful conversation'}>
                            <Text>Làm ơn giúp tôi = "Please help me !”</Text>
                            <Text>Cái này giá bao nhiêu = "How much does this cost ?”</Text>
                            <Text>Chỗ này ở đâu vậy = "Where is this place ?”</Text>
                        </Collapsible>
                        <Divider color={'black'} height={1}/>

                        <Collapsible title={'Nearest path to destination'}>
                            {/*TODO: Use conditional styling here*/}
                            <View style={styles.navigationContainer}>
                                <View style={[styles.center, {width: 30, height: 30}]}>
                                    <FontAwesome name={'car'} size={24}/>
                                </View>
                                <Text style={{flex: 1}}>12345m</Text>
                                <Text style={[styles.redText, {flex: 2,}]}>High traffic jams</Text>
                                <MyButton hasBorder={true} width={100} paddingHorizontal={6}><Text>Show Route</Text></MyButton>
                            </View>

                            <View style={styles.navigationContainer}>
                                <View style={[styles.center, {width: 30, height: 30}]}>
                                    <FontAwesome name={'bus'} size={24}/>
                                </View>
                                <Text style={{flex: 1}}>12345m</Text>
                                <Text style={[styles.yellowText, {flex: 2,}]}>Normal traffic jams</Text>
                                <MyButton hasBorder={true} width={100} paddingHorizontal={6}><Text>Show Route</Text></MyButton>
                            </View>

                            <View style={styles.navigationContainer}>
                                <View style={[styles.center, {width: 30, height: 30}]}>
                                    <FontAwesome5 name={'walking'} size={24}/>
                                </View>
                                <Text style={{flex: 1}}>12345m</Text>
                                <Text style={[styles.greenText, {flex: 2,}]}>Light traffic jams</Text>
                                <MyButton hasBorder={true} width={100} paddingHorizontal={6}><Text>Show Route</Text></MyButton>
                            </View>

                        </Collapsible>
                        <Divider color={'black'} height={1}/>
                        <Collapsible title={'Description and reviews'}>
                            <TruncateText numberOfLines={3}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, dignissimos eum
                                ipsum iusto modi pariatur qui reiciendis repellendus sequi soluta sunt tempora
                                temporibus voluptatibus? Consequatur harum repudiandae saepe sequi similique!
                                Autem consequatur debitis explicabo, illo illum optio similique. Alias consequuntur,
                                debitis dolor eos excepturi hic inventore itaque labore maiores maxime necessitatibus
                                neque, quidem ullam voluptatem voluptatum! Ducimus id porro voluptatibus.
                            </TruncateText>
                            <SizedBox width={12} height={12}/>

                            <View style={styles.reviewSection}>
                                <View style={styles.reviewContainer}>
                                    <View>
                                        <Image source={require('@/assets/images/tempUser.jpg')}
                                               style={{width: 50, height: 50, borderRadius: 12}}/>
                                    </View>

                                    <View style={styles.reviewProfile}>
                                        {/*It still works despite errors*/}
                                        <TruncateText numberOfLines={3}>Good place to visit</TruncateText>
                                        <Text style={styles.reviewProfileName}>User 1</Text>
                                        <View style={styles.reviewProfileRating}>
                                            <FontAwesome5 name={'star'} size={16} color={'orange'}/>
                                            <FontAwesome5 name={'star'} size={16} color={'orange'}/>
                                            <FontAwesome5 name={'star-half'} size={16} color={'orange'}/>
                                        </View>
                                    </View>
                                </View>

                                <View style={styles.reviewContainer}>
                                    <View>
                                        <Image source={require('@/assets/images/tempUser.jpg')}
                                               style={{width: 50, height: 50, borderRadius: 12}}/>
                                    </View>

                                    <View style={styles.reviewProfile}>
                                        <TruncateText numberOfLines={3}>
                                            I had an absolutely fantastic time at
                                            Sunny Beach! The golden sand was clean and soft, perfect for lounging around
                                            and
                                            building sandcastles. The water was crystal clear and refreshing, just the
                                            right
                                            temperature for a swim. There were plenty of amenities nearby, including
                                            restrooms and beachside cafes. Watching the sunset from the shore was the
                                            highlight of my trip. Highly recommend for anyone looking for a relaxing
                                            beach
                                            day!
                                        </TruncateText>
                                        <Text style={styles.reviewProfileName}>User 1</Text>
                                        <View style={styles.reviewProfileRating}>
                                            <FontAwesome5 name={'star'} size={16} color={'orange'}/>
                                            <FontAwesome5 name={'star'} size={16} color={'orange'}/>
                                            <FontAwesome5 name={'star-half'} size={16} color={'orange'}/>
                                        </View>
                                    </View>
                                </View>

                                <View style={styles.reviewContainer}>
                                    <View>
                                        <Image source={require('@/assets/images/tempUser.jpg')}
                                               style={{width: 50, height: 50, borderRadius: 12}}/>
                                    </View>

                                    <View style={styles.reviewProfile}>
                                        <TruncateText numberOfLines={3}>Visited Oceanview Beach with my family
                                            last weekend, and it was a great experience. The beach was well-maintained,
                                            and
                                            there were lifeguards on duty, which made us feel safe. My kids loved the
                                            shallow areas where they could splash around. We also rented a kayak and
                                            explored the nearby coves. The only downside was that it got quite crowded
                                            in
                                            the afternoon, so I recommend going early to grab a good spot.
                                        </TruncateText>
                                        <Text style={styles.reviewProfileName}>User 1</Text>
                                        <View style={styles.reviewProfileRating}>
                                            <FontAwesome5 name={'star'} size={16} color={'orange'}/>
                                            <FontAwesome5 name={'star'} size={16} color={'orange'}/>
                                            <FontAwesome5 name={'star-half'} size={16} color={'orange'}/>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </Collapsible>
                        <Divider color={'black'} height={1}/>
                    </TouchableOpacity>
                </ScrollView>
            </View>
            {children}
        </Modal>
    );
}

const styles = StyleSheet.create({
    redText: {
        color: 'red'
    },
    blueText: {
        color: 'blue'
    },
    yellowText: {
        color: 'orange'
    },
    greenText: {
        color: 'green'
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalContent: {
        position: 'absolute',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        bottom: 0,
        height: '85%',
        width: '100%',
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        borderColor: '#000',
        borderWidth: 1,
        backgroundColor: '#fff',
        zIndex: 2,
        paddingVertical: 24,
        paddingHorizontal: 12,
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginBottom: 12,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
    },
    modalHeader: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    closeModal: {
        position: 'absolute',
        top: 0,
        left: 12,
    },
    bookmarkIcon: {
        position: 'absolute',
        top: 0,
        right: 12,
    },
    modalStyles: {
        margin: 0,
    },
    headerPoints: {},
    headerAddress: {},
    visited: {
        color: 'green',
    },
    notVisited: {
        color: 'red',
    },
    destPic: {
        width: '100%',
        height: 200,
        borderRadius: 12,
    },
    etiquetteContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
    },
    etiquetteColumn: {
        flex: 1,
        width: 200,
    },
    etiquetteTitleDo: {
        fontSize: 16,
        fontWeight: 'semibold',
        color: 'green',
    },
    etiquetteTitleDont: {
        fontSize: 16,
        fontWeight: 'semibold',
        color: 'red',
    },
    navigationContainer: {
        flexDirection: 'row',
        gap: 12,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 6,
    },
    reviewContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 12,
        borderRadius: 12,
        borderColor: 'black',
        borderWidth: 1,
        gap: 24,
        width: '100%',
    },
    reviewProfile: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        flex: 1,
        gap: 6,
    },
    reviewProfileName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    reviewProfileComment: {
        fontSize: 14,
    },
    reviewProfileRating: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    reviewSection: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        gap: 12,
    }
});