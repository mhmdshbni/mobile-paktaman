import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import {Entypo,SimpleLineIcons, FontAwesome6,  MaterialCommunityIcons, AntDesign} from '@expo/vector-icons';

export default App = () => {
  return (
    <View style={styles.kotak}>
      <Text style={styles.text}>TouchableOpacity (custom)</Text>
      <TouchableOpacity style={styles.button} onPress={() => alert('3===D ')}>
        <View style={styles.buttonContent}>
          <Entypo name="home" size={24} color="white" />
          <Text style={styles.buttonText}>Home</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => alert('3===D ')}>
        <View style={styles.buttonContent}>
          <SimpleLineIcons name="plane" size={24} color="white" />
          <Text style={styles.buttonText}>Kapal</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => alert('3===D ')}>
        <View style={styles.buttonContent}>
          <AntDesign name="apple1" size={24} color="white" />
          <Text style={styles.buttonText}>Apple</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => alert('3===D ')}>
        <View style={styles.buttonContent}>
          <AntDesign name="contacts" size={24} color="white" />
          <Text style={styles.buttonText}>contacts</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => alert('3===D ')}>
        <View style={styles.buttonContent}>
          <FontAwesome6 name="display" size={24} color="white" />
          <Text style={styles.buttonText}>Display</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => alert('3===D ')}>
        <View style={styles.buttonContent}>
          <MaterialCommunityIcons name="replay" size={24} color="white" />
          <Text style={styles.buttonText}>Replay</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => alert('3===D ')}>
        <View style={styles.buttonContent}>
        <MaterialCommunityIcons name="playlist-music" size={24} color="white"/>
          <Text style={styles.buttonText}>Music</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => alert('3===D ')}>
        <View style={styles.buttonContent}>
       <AntDesign name="gift" size={24} color="white" />
          <Text style={styles.buttonText}>Gift</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => alert('3===D ')}>
        <View style={styles.buttonContent}>
       <AntDesign name="rest" size={24} color="white" />
          <Text style={styles.buttonText}>Kopi</Text>
        </View>
      </TouchableOpacity>

       <TouchableOpacity style={styles.button} onPress={() => alert('3===D ')}>
        <View style={styles.buttonContent}>
       <AntDesign name="bank" size={24} color="white" />
          <Text style={styles.buttonText}>Bank</Text>
        </View>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  kotak: {
    gap: 10,
    backgroundColor: 'white',
    paddingTop: StatusBar.currentHeight,
    alignItems: 'center',
  },
  text: {
    color: 'black',
    paddingTop: StatusBar.currentHeight,
    fontFamily: 'Sans-Serif',
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#007bff',
    borderRadius: 10,
    padding: 10,
  },
  buttonContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});