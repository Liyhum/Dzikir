import React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View ,AsyncStorage,Vibration,Modal, Button} from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import IntroSlider from 'react-native-app-intro-slider';
import AntDesign from '@expo/vector-icons/AntDesign'
const dura =100
const slide =[
  {
    key:'1',
    text:'Say "Subhanallah 33x"'
  },
  {
    key:'1',
    text:'Say "Alhamdullilah 33x"'
  },
  {
    key:'1',
    text:'Say "Allahu Akbar 33x"'
  },
]
class HomeScreen extends React.Component  {
  state={
    Counting:0,
    show:false,
    password:'',
    modal:false
  }
  constructor(){
      super()
      AsyncStorage.getItem('Number',(error,result)=>{
          if(result){
              this.setState({Counting:result})
          }
          else{
              console.log(error)
          }
      })
  }
  showTitle=()=>{
    if(this.state.password == 'halloputri'){
      return(
        <View style={{marginLeft:20}}>
          <Text>Hallo Putri Makasih yak,Yak intinya w mau makasih yak :v,Sorry gajelas,maaf ga bagus :D</Text>
        </View>
      )
    }else{
      <View></View>
    }
  }
  showTitle2=()=>{
    if(this.state.password == 'hallorisa'){
      return(
        <View>
          <Text>Hai risa,I love u ,,ea tapi boong :v</Text>
        </View>
      )
    }else{
      <View></View>
    }
  }
  jakfar=()=>{
    if(this.state.password == "jakfar"){
      return(
        <View>
          <Text>DZIKIR OI</Text>
        </View>
      )
    }
    else{
      <View>
        <Text> HAII</Text>
      </View>
    }
  }
  onCount= ()=>{
      this.setState({
        Counting: this.state.Counting + 1
      });
      Vibration.vibrate(dura)
  }
  resetCount(){
    this.setState({Counting:0})
  }
  OpenModal(){
    this.setState({modal:!this.state.modal})
  }
  closeModal(){
    this.setState({modal:!this.state.modal})
  }
  render(){
    return (
    <View style={styles.container}>
      <Modal transparent visible={this.state.modal}>
        <View style={{flex:1,alignItems:'center',justifyContent: 'center',}}>
          <View style={{height:180,width:350,backgroundColor: 'white',}} >
            {this.showTitle()}
            {this.showTitle2()}
            {this.jakfar()}
            <View style={{flexDirection:'row',justifyContent: 'space-between',marginHorizontal:15,marginTop:10}}>
              <TextInput 
              placeholder="    MasukanKeyword"
              onChangeText={(text)=>this.setState({password:text})}
              style={{marginBottom:80,height:50,width:'80%',marginTop:20}}
              keyboardType='visible-password'
              />
              <TouchableOpacity onPress={()=>this.closeModal()} >
                <AntDesign name="close" size={20} />
              </TouchableOpacity>

            </View>
          </View>
        </View>
      </Modal>
        <View style={styles.title}>
          <Text style={{fontSize:15,marginBottom:10,color:'white',marginTop:30}}>Slide for Next Dzikir</Text>
          <ScrollView horizontal={true} style={{flexDirection:'row'}} showsHorizontalScrollIndicator={false}>  
          <Text style={styles.textTitle}>
            Say "Subhanallah"
          </Text>
          <Text style={styles.textTitle}>
            Say "Alhamdullilah"
          </Text>
          <Text style={styles.textTitle}>
            Say "Allahu Akbar"
          </Text>
          </ScrollView>
        </View>
          <View style={styles.sayCount}>
            <Text style={styles.count}> {this.state.Counting} </Text>
          </View>
        <View style={styles.CircleContainer}>
          <View style={styles.CircleDzikir}>
          <TouchableOpacity onPress={()=> this.onCount()}>
            <View style={styles.CircleDzikir}>
            </View>
          </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity onPress={()=>this.OpenModal()}>
            <View style={{height:20,width:20,backgroundColor:'white',borderRadius:40,marginLeft:10}}>
            </View>
          </TouchableOpacity>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={()=> this.resetCount()}>
            <View style={styles.button}>
              <Text style={styles.titleButton}>Reset </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default HomeScreen
function elevationShadowStyle(elevation) {
  return {
    elevation,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0.5 * elevation },
    shadowOpacity: 0.3,
    shadowRadius: 0.8 * elevation
  };
}

const styles = StyleSheet.create({
  shadow1: elevationShadowStyle(5),
  shadow2: elevationShadowStyle(10),
  shadow3: elevationShadowStyle(20),
  container: {
    flex: 1,
    backgroundColor: '#FDBF50',
  },
  titleHeader:{
    fontSize:20,
    marginTop:5,
    color:"white"
  },
  buttonContainer:{
    height:50,
    width:100,
    marginBottom: 20,
  },
  header:{
    height:80,
    width:'100%',
    backgroundColor: '#FDBF50',
    // backgroundColor: 'white',
    alignItems:'center',
    justifyContent: 'center',
  },
  sayCount:{
    marginTop: 100,
    justifyContent: 'center',
    alignItems:'center'
  },
  textTitle:{
    fontSize:25,
    color:'white',
    marginRight:80,
    marginLeft:80
  },
  titleButton:{
    color:'white',
    fontSize:20
  },
  button:{
    height:50,
    width:100,
    backgroundColor: "#8DA05E",
    borderRadius:10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    marginLeft:30,
    position:'relative'
  },
  count:{
    fontSize:50,
    color:'white',
    marginTop: 10,
  },
  title:{
    marginTop:40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  CircleContainer:{
    alignItems:'center',
    justifyContent: 'center',
    flex:1,
    marginBottom:30
  },
  CircleDzikir:{
    height:100,
    width:100,
    borderRadius:90,
    backgroundColor: 'white',
    shadowColor:'white',
    elevation:3
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
