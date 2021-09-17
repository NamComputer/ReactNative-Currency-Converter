import React from 'react'
import { StyleSheet, Text, TouchableOpacity, Image } from 'react-native'
import colors from '../constants/colors'

const styles = StyleSheet.create({
  container:{
    
    // flex direction giúp cho nội dung như text, icon cùng 1 line
    flexDirection: 'row',
    // alignItem giúp cho nội dung trên line đều được đi qua trung điểm của một đoạn thằng
    alignItems : "center",
    justifyContent:'center',
    marginVertical: 20

  },
  buttonIcon: {
    marginRight: 10,
    width: 20,
    height: 20,
    resizeMode:'contain'
  },
  buttonText: {
    fontSize: 16,
    color: colors.white,
  },
})

export const Button = ({text ,onButtonPress}) => {
    return(
      <TouchableOpacity onPress={onButtonPress} style={styles.container}>
        <Image 
          source={require('../assets/images/reverse.png')} 
          style={styles.buttonIcon}
        />
        <Text style={styles.buttonText}>{text}</Text>
      

      </TouchableOpacity>
    )


}