import React from 'react';
import { StyleSheet, Text, View, Image, TextInput,TouchableOpacity } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

export default class WriteScreen extends React.Component{
    render(){
        return(
            <View>
                <TextInput placeholder='Write name of story here'
                 style={{width:300,
                 height:80,
                 flex: 1,
                 justifyContent: 'center',
                 alignItems: 'center'}}>

                </TextInput>
                <TouchableOpacity
                 style={{width:80,
                    height:80,
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor:'black'
                    }} 
                    onPress={
                        <Text>Hi, still working on this bit</Text>
                    }>
                    <Text style={{color:'white'}}>GO</Text>
                </TouchableOpacity>
            </View>
        )
    }
}