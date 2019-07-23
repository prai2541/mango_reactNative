import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import * as widget from 'react-native-elements';
import HistList from './hist.js';
import {createStackNavigator, createAppContainer} from 'react-navigation';


// const MainNavigator = createStackNavigator({
//   Home: MainMenu,
//   hist: HistList,
// });
//const App = createAppContainer(MainNavigator);
export default class App extends Component{
  render() {
    return(
      <MainMenu></MainMenu>
    );
  }
}

class MainMenu  extends React.Component{
  //const {navigate} = this.props.navigation;
  render(){
  return (
    <View style={styles.container}>
      <View style={styles.help}>
        <Text style={{fontSize: 30}}>OutSource</Text>
        <widget.Button title='Log Out' buttonStyle={styles.logout}/>
      </View>
      <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity onPress={() => {
          console.log('help')
        }}>
          <View style={styles.checkin}>
            <Text style = {{fontSize: 40, color: '#fff'}}>Check In</Text>
          </View>
        </TouchableOpacity>
        <View style={{height:50}}></View>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <TouchableOpacity onPress={() => {
            console.log('end1')
            //navigate('HistList')
          }}>
            <View style={styles.twobutton}>
              <Text style = {{fontSize: 20, color: '#46b5a6'}}>แจ้งขอลา</Text>
            </View>
          </TouchableOpacity>
          <View style={{width:20}}></View>
          <TouchableOpacity onPress={() => {
            console.log('end2')
          }}>
            <View style={styles.twobutton}>
              <Text style = {{fontSize: 20, color: '#46b5a6'}}>ประวัติการเข้างาน</Text>
            </View>
          </TouchableOpacity>
        </View>
      
      </View>
      
       
      
    </View>
  )
        }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column'
  },
  help: {
    justifyContent: 'space-between', 
    flexDirection: 'row',
    padding: 20,
    marginTop: 20
    
  },
  logout: {
    backgroundColor: '#46b5a6'
  },
  checkin: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    height: 200,
    borderRadius: 400,
    backgroundColor:'#46b5a6',
  },
  twobutton: {
    padding:5, 
    borderRadius:35, 
    borderColor: '#46b5a6',
    borderWidth: 1,
    width: 150, 
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    //flex: 1
  },
});



