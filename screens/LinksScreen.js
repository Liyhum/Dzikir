import { Ionicons } from '@expo/vector-icons';
import React,{Component} from 'react';
import { StyleSheet, Text, View,FlatList, YellowBox } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import Data from '../assets/data/tempData'

export default class LinksScreen extends Component {
  state={
    tempData:Data
  }
  _renderItems=({item})=>{
    if(item.id & 1){
      return(
        <View style={styles.container}>
          <View style={styles.textContainer}>
            <View style={styles.nameContainer}>
              <Text style={styles.optionText}> {item.text} </Text>
              <Text style={styles.optionTextLatin}> {item.name} </Text>
            </View>
          </View>
        </View>
      )
    }
    else{
      return(
        <View style={styles.container}>
        <View style={styles.textContainer2}>
          <View style={styles.nameContainer}>
            <Text style={styles.optionText}> {item.text} </Text>
            <Text style={styles.optionTextLatin}> {item.name} </Text>
          </View>
        </View>
      </View>
      )
    }
  }
  render(){
  return (
  <View style={styles.container}>
    <View style={{flex:1}}>
     
      <FlatList
      renderItem={this._renderItems}
      data={this.state.tempData}
      keyExtractor={item => item.toString()}
      />
    </View>
  </View>
  );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDBF50',
  },
  contentContainer: {
    height:80,
    width:'100%',
    backgroundColor: '#FDBF50',
    alignItems:'center',
    justifyContent: 'center',
    elevation:10
  },
  optionIconContainer: {
    marginRight: 12,
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: '#ededed',
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  optionText: {
    fontSize: 25,
    color:'#f5eee1',
    marginBottom:10
  },
  optionTextLatin:{
    fontSize:15,
    color:'#f5eee1'
  },
  textContainer:{
    padding:10,
    width:'100%',
    backgroundColor: '#ad8b4c',
    marginVertical:10
  },
  textContainer2:{
    padding:10,
    width:'100%',
    backgroundColor: '#9ead4c',
    marginVertical:10
  }

});
