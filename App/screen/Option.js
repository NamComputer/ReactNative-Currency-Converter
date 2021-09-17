// Muốn dùng JSX phải import React
import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, Alert, Linking} from 'react-native';
/*SafeAreaView giúp cho chúng ra ko bị dính 3 cái <text> vào cùng 1 chỗ mà tách rời nhau*/
import colors from '../constants/colors';
/* Entypo là một thư viện icon */
import {Entypo} from '@expo/vector-icons'
import { RowItem, RowSeperator } from '../components/RowItem';

const OpenLink = (url) => Linking.openURL(url).catch(() => 
Alert.alert('Your link is not working')
)
export default () => {
    return (
      <SafeAreaView style={{flex: 1}}>
        <StatusBar barStyle='dark-content' backgroundColor={colors.white} /> 
          <ScrollView>
            <RowItem 
              onPress={() => Alert("U Pressed")}
              text="Theme"    
              Icon={
                <Entypo name="chevron-right" size = {15} color = {colors.blue} />
                }
            />
            
            <RowSeperator />
            
            <RowItem 
              onPress={() => OpenLink( 'https://learn.reactnativeschool.com/p/react-native-basics-build-a-currency-converter')}
              text="React Native Basics"    
              Icon={
                <Entypo name="export" size = {15} color = {colors.blue} />
                }
            />
            
            <RowSeperator />
            
            <RowItem 
              onPress={() => alert('To do!')}
              text="React Native By Examples"
              Icon={
                <Entypo name="export" size = {15} color = {colors.blue}/>
                }
            />

          </ScrollView>
      </SafeAreaView>

    )
}