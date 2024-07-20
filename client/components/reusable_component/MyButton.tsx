import {Pressable} from "react-native";
import {StyleSheet} from "react-native";
import exp from "node:constants";
import React from "react";

interface MyBtnProps {
    name?: string,
    width?: number,
    height?: number,
    children?: React.ReactNode,
    borderRadius?: number,
    paddingVertical?: number,
    paddingHorizontal?: number
    onPress?: () => void,
    hasBorder?: boolean
    borderWidth?: number,
    borderColor?: string,
}

const defaultProps: MyBtnProps = {
    onPress(): void {
        alert('TODO: Decide what the button do');
    },
    width: 100,
    // height: 48,
    borderRadius: 12,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: "#000",
}

const MyBtn: React.FunctionComponent<MyBtnProps> = (props) => (
    <Pressable style={{
        ...styles.btn,
        width: props.width,
        // height: props.height,
        paddingVertical: props.paddingVertical,
        paddingHorizontal: props.paddingHorizontal,
        borderRadius: props.borderRadius,
        borderWidth: props.hasBorder ? props.borderWidth : 0,
        borderColor: props.hasBorder ? props.borderColor : "transparent"
    }}
    onPress={props.onPress}>
        {props.children}
    </Pressable>
);

MyBtn.defaultProps = defaultProps;

const styles = StyleSheet.create({
    btn: {
        width: 100,
        backgroundColor: "#95E1D3",
        padding: 10,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: 'center'
    },
});

export default MyBtn;