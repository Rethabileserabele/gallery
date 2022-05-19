import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TouchableOpacity, Text, Image, View } from 'react-native';
import { useState} from 'react';
import Display from "./Display.js";

export default function App() {
  const [image, setImages] = useState("");
  const firstImage = () =>{
      setImages(require('./assets/images/1.jpeg'));
  };
  const secondImage = () =>{
      setImages(require('./assets/images/2.jpeg'));
  };
  const thirdImage = () =>{
      setImages(require('./assets/images/3.jpeg'));
  }
  const fourthImage = () =>{
      setImages(require('./assets/images/4.jpeg'));
  }
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text    style={styles.name}>Simple Gallery</Text>
      <View style={styles.images}>
      <Display image={image}/>
      </View>
      <View style={styles.makerow}>
      <TouchableOpacity onPress={firstImage}>
      <Text style={styles.text}>wifi</Text>
      <Image source={image} style={styles.avatars}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={secondImage} >
      <Text style={styles.text}>wifi2</Text>
      <Image source={image} style={styles.avatars}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={thirdImage} >
      <Text style={styles.text }>wifi3</Text>
      <Image source={require('./assets/images/3.jpeg')} style={styles.avatars}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={fourthImage} >
      <Text style={styles.text}>wifi4</Text>
      <Image source={image} style={styles.avatars}/>
      </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
  name:{
    color: 'white',
    fontSize: 32,
    marginTo: 50,
    marginBottom: 25
  },
  makerow:{
  flexDirection: 'row',
  },
  images:{
     width: '100%', 
     height: '40%' 
    },
  avatars:{
  width: '10%', 
  height: '10%',
  borderWidth: 10,
  flexDirection: 'column'
  },
    text:{
      fontSize: 18, 
      color: 'white',
      padding: 10
    }
});
