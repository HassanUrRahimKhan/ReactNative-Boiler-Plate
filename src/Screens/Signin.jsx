import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import BackBtnFlx from '../components/BackBtnFlx'
import TextBox from '../components/TextBox'

const Signin = ({navigation}) => {
    return (
        <View>
            <BackBtnFlx ></BackBtnFlx>
            <View style={styles.headerSignin}>
                <Image
                    style={styles.headerLogo}
                    source={require("../../assets/headerLogo.png")}
                    resizeMode="contain"
                />
            </View>
          <View style={{borderWidth:0,borderColor:"red",height:120,top:15}}>
               <View>
               <Text style={{color:"#0D986A",fontSize:40,left:19}}>Login</Text>
               </View>
               <View style={{marginVertical:8}}>
                <Text style={{color:"#0D986A",fontSize:16,left:15}}>Please enter your NISN and password to start learning now.</Text>
               </View>
          </View>

          <View style={styles.mainflx}>
            <TextBox></TextBox>
          </View>

          
        </View>
    )
}

export default Signin

const styles = StyleSheet.create({
    headerSignin: {
        borderWidth: 0,
        borderColor: "red",
        height: 50,
        justifyContent:"center"

    },
    headerLogo:{
        width: "50%",
        height: 66,
        left:25
    },
    mainflx:{
        borderWidth:1,
        borderColor:"black",
        marginVertical:10,
        height:300
    }
})