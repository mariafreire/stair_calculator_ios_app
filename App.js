import React, {Component} from 'react';
import {StyleSheet, Text, View, StatusBar, TextInput, TouchableOpacity, Image} from 'react-native';

export default class App extends Component {

  constructor (props) {
    super(props)
    this.state = {ttRise:0, run:0, rise:0, result:""}
    this.calcular = this.calcular.bind(this)
  }

  calcular() {
    let ttriseI = this.state.ttRise
    let riseH = this.state.rise
    let runS = this.state.run
    let rise_number = this.state.ttRise/this.state.rise
    let run_number = rise_number - 1
    let run_total = run_number * runS
    let stringer = (runS * runS) + (riseH * riseH)
    let s = this.state
    
    if (this.state.ttRise != "") {
      s.result = "Total Rise: " + ttriseI + " inches" + "\n" +
        "Step Rise: " + rise_number.toFixed(0) + " units" + "\n" +
        "Rise Height: " + riseH + " inches" + "\n" + "\n" +
        "Total Run: " + run_total.toFixed(2) + " inches" + "\n" +
        "Step Run: " + run_number.toFixed(0) + " units" + "\n" +
        "Run Size: " + runS + " inches" + "\n" + "\n" +
        "Stringer Length: " + Math.sqrt(stringer).toFixed(2) + " inches" + "\n"
    } 
    this.setState(s)
  }

  render() {
    StatusBar.setBarStyle('light-content', true);
    return (
      
      <View style={styles.container}>
        <View style={styles.fakeStatusBar}>
          {/* 'fake' status bar */}
          <Text style={styles.title}>Stair Calculator</Text>
        </View>
          
          <Image style={{height: 220, width: "100%"}} source={require('./images/stair.png')}/> 
          <Text style={styles.txtTop}>Enter Total Rise</Text>
          <TextInput style={styles.txtInput} placeholder="inches" keyboardType="numeric" onChangeText={(ttRise)=>{this.setState({ttRise})}} ></TextInput>
          <Text style={styles.txtTop}>Enter Your Rise</Text>
          <Text style={styles.txtBottom}>Sugestion: 7.75 inches, Maximum</Text>
          <TextInput style={styles.txtInput} placeholder="inches" keyboardType="numeric" onChangeText={(rise)=>{this.setState({rise})}}></TextInput>
          <Text style={styles.txtTop}>Enter Your Run</Text>
          <Text style={styles.txtBottom}>Sugestion: 10 to 11 inches, Minimum</Text>
          <TextInput style={styles.txtInput} placeholder="inches" keyboardType="numeric" onChangeText={(run)=>{this.setState({run})}}></TextInput>
          <TouchableOpacity onPress={this.calcular} style={styles.button}><Text style={styles.bttText}>Calculate</Text></TouchableOpacity>
          <Text style={styles.result}>{this.state.result}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  fakeStatusBar: {
    height: 90, 
    alignSelf: "stretch", 
    backgroundColor: '#E57A44', 
    zIndex: 2,
    color: "#fff",
  },
  title: {
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 40,
    fontSize: 20,
    fontWeight: "bold",
    color: "#eee",
    textAlign: "center"
  },
  txtInput: {
    backgroundColor: "#fff",
    height: 30,
    width: 150,
    borderRadius: 3,
    borderWidth: .3,
    marginTop: 5,
    alignSelf: "center",
    textAlign: "center",
  },
  txtTop: {
    paddingTop: 10,
    fontSize: 15,
    fontWeight: "bold",
    color: "#393939"
  },
  button: {
    height: 30,
    width: 150,
    borderRadius: 3,
    borderWidth: .3,
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: "#e9e9e9",
    alignItems: "center",
  },
  bttText: {
    padding: 5,
    fontWeight: "bold",    
  },
  result: {
    fontSize: 16,
  }
});
