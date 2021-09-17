import React from "react";
import { TouchableOpacity, Text, TextInput, View, StyleSheet} from "react-native";
import colors from "../constants/colors";


const styles =  StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        marginVertical: 10,
        marginHorizontal: 20,
        flexDirection: 'row',
        borderRadius: 5,
      },
      button: {
        padding: 15,
        borderRightColor: colors.border,
        borderRightWidth: 1,
        backgroundColor: colors.white,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
      },
      buttonText: {
        fontSize: 18,
        color: colors.blue,
        fontWeight: 'bold',
      },
      input: {
        flex: 1,
        padding: 10,
        fontSize: 16,
        color: colors.textLight,
      },
      containerDisable:{
        backgroundColor: colors.offWhite
      }
})

export const  ConversionInput = ({text, onButtonPress, value, onChangeText, keyboardTypeT,editable}) => {
    // Ở thẻ View ta chuyển sang style có tên containerStyles
    // và ta khai báo containerStyle có styles giống như styles.container và bỏ vô []
    // Khi điều kiện if xảy ra thì các thuộc tính containerStyles sẽ giống các gt trong container trừ những cái chúng ta cần thay đổi như ở dưới ta cần thay đổi màu backgroundColor
    const containerStyles = [styles.container];
    
    if (editable === false){
      // Thay đổi thuộc tính màu bằng cách push vô mảng style ta muốn thay đổi và ghi đè lên style container
      containerStyles.push(styles.containerDisable)
    }

    return (
    
      <View style={containerStyles}>
        <TouchableOpacity onPress={onButtonPress} style={styles.button}>
          <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
        <TextInput 
          style={styles.input} 
          value={value} 
          onChangeText={onChangeText} 
          keyboardType={keyboardTypeT}
          editable={editable} 
          
        /> 
      </View>
    )
}