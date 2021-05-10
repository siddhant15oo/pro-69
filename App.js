import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';



import TransactionScreen from './screens/TransactionScreen';
import SearchScreen from './screens/SearchScreen';

export default class App extends React.Component {
  
  render(){
    return (
      
        <AppContainer />
      
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Transaction: {screen: TransactionScreen},
  Search: {screen: SearchScreen},
},
{
  defaultNavigationOptions:({navigation})=>({
   tabBarIcon:({})=>{
     const routeName=navigation.state.routeName
     if (routeName==="Transaction"){
      return(
        <Image source={require('./assets/book.png') } style={{width:50, height:20}} />
      )
     }
     else if (routeName==="Search"){
      <Image source={require('./assets/searchingbook.png') } style={{width:50, height:20}} />
     }
     
   } 
  })
}



);


const AppContainer =  createAppContainer(TabNavigator);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});