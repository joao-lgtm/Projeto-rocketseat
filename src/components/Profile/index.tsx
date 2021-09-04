import React from "react";
import { View , Text} from "react-native";
import { Avatar } from "../Avatar";
import { styles } from "./style";

export function Profile() {
    return (
        <View style={styles.container}>

            <Avatar urlImage='https://github.com/joao-lgtm.png' />

            <View>
                <View style={styles.user}>
                    <Text style={styles.greeting}>
                        olá,
                    </Text>
                    <Text style={styles.username}>
                        João 
                    </Text>
                </View>
                    <Text style={styles.message}>
                        Hoje é dia de vitoria
                    </Text>
            </View>
        </View>
    )
}