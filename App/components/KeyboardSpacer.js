
import React, {useState,useEffect} from 'react'
import { Keyboard, View, Dimensions, Platform, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        left:100,
        right:100,
        bottom: 1000
    }

})


export const KeyboardSpacer = ({onToggle}) => {

    const [KeyboardSpace, setKeyboardSpace] = useState(0)
    useEffect(() => {
        const showListener = Keyboard.addListener('keyboardDidShow', (event) => {
             
            // console.log(event)
            const screenHeight = Dimensions.get('window').height
    
            const endY = event.endCoordinates.screenY;
            setKeyboardSpace(screenHeight - endY - 200);
            onToggle(true)
          });
        const hideListener = Keyboard.addListener('keyboardDidHide', () => {
            setKeyboardSpace(0);
            onToggle(false)})

        return () => {
                showListener.remove()
                hideListener.remove()
                };
            
    }, [onToggle])

    return <View style={[styles.container,{height:KeyboardSpace}]} />
}