import React from "react";
import {Image} from "react-native";
import {LinearGradient} from 'expo-linear-gradient';
import { theme } from "../../global/style/theme";
import { styles } from "./style";

type Props = {
    urlImage: string;
}

export function Avatar({urlImage}: Props) {
    const {secondary80, secondary100}= theme.colors;
    return (
        <LinearGradient
        style={styles.container}
        colors={[secondary80 , secondary100]}
        >
       <Image
       source={{uri: urlImage}}
       style={styles.Avatar} 
       />
        </LinearGradient>
    )};