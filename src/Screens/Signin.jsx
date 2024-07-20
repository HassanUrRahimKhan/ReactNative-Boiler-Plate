import { StyleSheet, Text, View, Image, TouchableOpacity,Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import BackBtnFlx from '../components/BackBtnFlx'
import TextBox from '../components/TextBox';
import Icons from 'react-native-vector-icons/SimpleLineIcons';

const Signin = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [response, setResponse] = useState('');
    const BASE_URL = "http://localhost:5000/api/"
  const handlePostRequest = async () => {
    try {
      const response = await fetch(`${BASE_URL}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: 'foo',
          body: {
            "username":"admin",
            "email":"hassan@gmail.com",
            "password":"12345"
        },
          userId: 1,
        }),
      });
      const json = await response.json();
      setResponse(JSON.stringify(json));
      Alert.alert('Success', 'Post request was successful');
      console.log(response)
    } catch (error) {
      Alert.alert('Error', 'Failed to make post request');
    }
  };
  useEffect(()=>{
    handlePostRequest()
  },[])
    return (
        <View >
          
            {/* <View style={styles.headerSignin}>
                <Image
                    style={styles.headerLogo}
                    source={require("../../assets/headerLogo.png")}
                    resizeMode="contain"
                />
            </View> */}
            <View style={{ borderWidth: 0, borderColor: "red", height: 120, top: 15 }}>
                <View>
                    <Text style={{ color: "#002055", fontSize: 35, left: 19,fontWeight:"600" }}>Welcome Back</Text>
                </View>
                <View style={{ marginVertical: 8 }}>
                    <Text style={{ color: "#868D95", fontSize: 16, left: 20, width: "60%" ,lineHeight:30}}>Please enter your email address and password for login</Text>
                </View>
            </View>

            <View style={styles.mainflx}>

                <TextBox placeHolder="Enter your Username" iconName="lock" textBoxName="Username/ Email"></TextBox>

                <TextBox placeHolder="Enter Your Password" iconName="lock" textBoxName="Password"></TextBox>

                <TouchableOpacity>
                    <Text style={styles.forgotText}>Forgot Password?</Text>
                </TouchableOpacity>
            </View>

            <View style={{ width: "100%", height: "10%", borderWidth: 0, borderColor: "pink", top: 20, display: 'flex', justifyContent: "center", alignItems: "center" }}>
                <TouchableOpacity style={{ borderWidth: 0, borderColor: "#0D986A", width: "90%", height: "75%", borderRadius: 30, backgroundColor: "#8B78FF", display: "flex", justifyContent: 'center', alignItems: 'center' }} onPress={() => navigation.navigate('HomeScreen')} >
                    <Text style={{ textAlign: 'center', fontSize: 20, color: "white" }}>Sign in</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.SocialLinks}>
                <Text style={styles.SigninWith}>Signin With</Text>
                <View style={styles.SocialLinksFlx}>
                    <Image source={require("../../assets/Apple.png")}/>
                    <Image source={require("../../assets/Google.png")}/>
                </View>
                <View style={{flexDirection:"row",top:40,justifyContent:'space-between',borderWidth:0,borderColor:"red",width:"40%"}}>
                    <Text>Not Registar Yet?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('signUpScreen')} >
                         <Text style={{color:"#8B78FF"}} >Sign Up</Text>
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
        height: 300,
        top: 0,


    },
    forgotText: {
        color: "#002055",
        fontSize: 18,
        bottom: 18,
        left: 230,
        top: 4
    },
    SigninWith:{
        top:"10%",
        fontSize:16
    },
    SocialLinks:{
        alignItems:"center",
        borderWidth:0,
        borderColor:"black",
        top:"3%",
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