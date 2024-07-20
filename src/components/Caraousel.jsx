import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import * as Progress from 'react-native-progress';

const Caraousel = (props) => {
    return (
        <View style={styles.maincontainer}>
            <View >
                <Text style={{ fontSize: 20, fontWeight: "600", marginBottom: 5, color: "#fff" }} >
                    {props.applicationName}
                </Text>
                <Text style={{ color: "#C5DAFD", fontWeight: "400", fontSize: 12 }}>
                    UI design kit
                </Text>
                <View style={styles.imagecontainer} >
                    <Image style={{ marginTop: 12, marginRight: 100 }} source={require("../../assets/People.png")} />
                    <Text style={{ marginRight: 12, textDecorationLine: "underline", fontSize: 17, fontWeight: "400", color: "#C5DAFD" }}>
                        {(props.progress)*100 + "%"}
                    </Text>

                    <Text style={{ marginRight: 12, fontSize: 17, fontWeight: "500", color: "#ffff" }}>
                        50/80
                    </Text>
                    <View style={{ top: 30, left: -139 }}>
                        <Progress.Bar progress={0.5} width={100} color='#fff' />
                    </View>
                </View>

                <Text>

                </Text>
            </View>
        </View>
    )
}

export default Caraousel

const styles = StyleSheet.create({
    maincontainer: {
        width: 350,
        height: "150px",
        backgroundColor: "#3580FF",
        padding: 15,
        borderRadius: 15,
        marginTop: 30,
        marginRight:10

    },

    imagecontainer: {
        flexDirection: "row",

        alignItems: "center",


        marginTop: 12

    }
})