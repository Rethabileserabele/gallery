import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TouchableOpacity, Text, Image, View } from 'react-native';
import { useState} from 'react';

export default function Display({image}) {
    
    return(
     <View style={styles.container}>
         <StatusBar style="auto" />
         <Image source={image} style={{ width: '100%', height: '100%' }}/>
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

});