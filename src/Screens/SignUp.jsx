import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import BackBtnFlx from '../components/BackBtnFlx'
import TextBox from '../components/TextBox';
import Icons from 'react-native-vector-icons/SimpleLineIcons'
const Signin = ({ navigation }) => {
    return (
        <View>
            {/* <BackBtnFlx ></BackBtnFlx> */}
            {/* <View style={styles.headerSignin}>
                <Image
                    style={styles.headerLogo}
                    source={require("../../assets/headerLogo.png")}
                    resizeMode="contain"
                />
            </View> */}
            <View style={{ flexDirection: "row", borderWidth: 0, borderColor: "red", alignItems: "center" }}>
                <BackBtnFlx ></BackBtnFlx>
                <Text style={{ fontSize: 30, left: "100%", color: "#002055" }}>Sign Up</Text>
            </View>
            <View style={{ borderWidth: 0, borderColor: "red", height: 120, top: 15 }}>
                <View>
                    <Text style={{ color: "#002055", fontSize: 35, left: 19, fontWeight: "600" }}>Create Account</Text>
                </View>
                <View style={{ marginVertical: 8 }}>
                    <Text style={{ color: "#868D95", fontSize: 17, left: 20, width: "62%", lineHeight: 30 }}>Please enter your information and create your account.</Text>
                </View>
            </View>

            <View style={styles.mainflx}>

                <TextBox placeHolder="Enter Username" iconName="account" textBoxName="Username"></TextBox>
                <TextBox placeHolder="Enter Email" iconName="email" textBoxName="Email"></TextBox>

                <TextBox placeHolder="Enter Password" iconName="lock" textBoxName="Password"></TextBox>

                {/* <TouchableOpacity>
                <Text style={styles.forgotText}>Forgot Password</Text>
            </TouchableOpacity> */}
            </View>

            <View style={{ width: "100%", height: "10%", borderWidth: 0, borderColor: "pink", top: 120, display: 'flex', justifyContent: "center", alignItems: "center" }}>
                <TouchableOpacity style={{ borderWidth: 0, borderColor: "#0D986A", width: "90%", height: "75%", borderRadius: 30, backgroundColor: "#8B78FF", display: "flex", justifyContent: 'center', alignItems: 'center' }} onPress={() => navigation.navigate('signinScreen')} >
                    <Text style={{ textAlign: 'center', fontSize: 20, color: "white" }}>Sign Up</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.SocialLinks}>
                <Text style={styles.SigninWith}>Signup With</Text>
                <View style={styles.SocialLinksFlx}>
                    <Image source={require("../../assets/Apple.png")}/>
                    <Image source={require("../../assets/Google.png")}/>
                </View>
                <View style={{flexDirection:"row",top:40,justifyContent:'space-between',borderWidth:0,borderColor:"red",width:"40%"}}>
                    <Text>Have an Account?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('signinScreen')} >
                         <Text style={{color:"#8B78FF"}} >Sign In</Text>
                    </TouchableOpacity>
                </View>
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
        justifyContent: "center"

    },
    headerLogo: {
        width: "50%",
        height: 66,
        left: 25
    },
    mainflx: {
        borderWidth: 0,
        borderColor: "black",
        marginVertical: 10,
        height: 250,
        top: 0,


    },
    forgotText: {
        color: "#004A61",
        fontSize: 18,
        bottom: 18,
        left: 230
    },
    SigninWith:{
        top:"10%",
        fontSize:16
    },
    SocialLinks:{
        alignItems:"center",
        borderWidth:0,
        borderColor:"black",
        top:"15%",
        height:"18%"
    },
    SocialLinksFlx:{
        borderWidth:0,
        borderColor:"red",
        width:"50%",
        height:"50%",
        top:30,
        flexDirection:"row",
        justifyContent:"space-evenly"
    }
})