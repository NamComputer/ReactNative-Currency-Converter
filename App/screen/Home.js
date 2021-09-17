import React, {useState, useContext} from 'react'
import { View, 
  StyleSheet, 
  StatusBar, 
  Image, 
  Dimensions, 
  Text, 
  ScrollView, 
  TouchableOpacity,
  ActivityIndicator,

} from 'react-native'
import { format } from 'date-fns'
import { Entypo } from '@expo/vector-icons'
import { SafeAreaView } from 'react-native-safe-area-context'

import colors from '../constants/colors'
import { ConversionInput } from '../components/ConversionInput';
import { Button } from '../components/Button';
import { KeyboardSpacer } from '../components/KeyboardSpacer'
import { ConversionContext } from '../util/ConversionContext'


//screen sẽ lấy ra các thông số chiều dài, rộng của màn hình
const screen =  Dimensions.get('window');

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: colors.blue,
        //justifyContent:"center"
    },
    content: {
      paddingTop: screen.height * 0.1,
    },
    logoContainer:{
        alignItems:"center",
        justifyContent:"center"
    },
    logoBackground:{
        width: screen.width * 0.45,
        height: screen.width * 0.45
    },
    logo:{
        position:"absolute",
        width: screen.width * 0.25,
        height: screen.width * 0.25
    },
    textHeader:{
      color: colors.white,
      fontWeight: 'bold',
      fontSize: 30,
      textAlign: 'center',
      marginBottom: 20,
    },
    text:{
    fontSize: 14,
    color: colors.white,
    textAlign: 'center',
    },
    header:{

      alignItems: 'flex-end',
      marginHorizontal:20

    }
   
});



export default ({ navigation }) => {

    // const baseCurrency = 'USD';
    // const quoteCurrency = 'GBP';
    
    // const [baseCurrency, setbaseCurency] = useState('USD')
    // const [quoteCurrency, setquoteCurency] = useState('GBP')
    const [value, setValue] = useState('100')
    const {
      baseCurrency,
      quoteCurrency,
      swapCurrencies,
      rates,
      isLoading

    } = useContext(ConversionContext);

    const conversionRate = rates[quoteCurrency];
    //const date = new Date();
  
      // const swapCurrencies = () => {
      //   setbaseCurency(quoteCurrency)
      //   setquoteCurency(baseCurrency)
      // }

    

    // Khởi tạo useEffect
    // Đây được gọi là Hooks thì ở dưới đây ta mảng có 2 tham số
    // 1. là scrollEnabled nhận giá trị từ useState là false
    // 2. là setScrollEnabled hàm này sẽ có nhiệm vụ thay đổi gt của scrollEnabled

    const [scrollEnabled, setScrollEnabled] = useState(false) 
  
    // // useEffect sẽ chỉ được thực hiện khi giá trị scrollEnabled thay đổi
    // useEffect(() => {
    //   // Khởi tạo hai func để nhận biết khi nào bàn phím được hiện ra và khi nào đóng
    //   const showListener = Keyboard.addListener('keyboardDidShow',() =>
    //   setScrollEnabled(true));

    //   const hideListener = Keyboard.addListener('keyboardDidHide',() =>
    //   setScrollEnabled(false));

    //   // componentDidUnmount hàm này sẽ luôn được thực hiện đầu tiên trong useEffect khi không sử dụng nữa giúp xóa đi các event phía trên giúp tối ưu hiệu năng
    //   return () => {
    //   showListener.remove()
    //   hideListener.remove()
    //   };
    // }, [scrollEnabled]); // Ta khởi tạo thêm 1 tham số trong useEffect chính là biến scrollEnabled, khi biến này thay đổi giá trị thì hàm useEffect này mới được thực thi khi update() giúp tối ưu hiệu năng
    return (
      
      <View style = {styles.container}>
        {/*Trong React hỗ trợ hàm scrollEnabled để giúp ta hiển thị bàn phím hay tắt, đi kèm là giá trị boolean */}
        <ScrollView scrollEnabled={scrollEnabled}> 
          
          <StatusBar barStyle="light-content" backgroundColor={colors.blue} />
          
          {/* thẻ <SafeAreaView> giúp cho nội dung mình muốn luôn ở đúng vị trí */}
          <SafeAreaView style = {styles.header}>
            <TouchableOpacity onPress = {() => navigation.push("Option")}>
              <Entypo name="cog" size={32} color={colors.white} />
            </TouchableOpacity>
          </SafeAreaView>
          
          <View style = {styles.content}>
            <View style = {styles.logoContainer}> 
              <Image 
                source={require('../assets/images/background.png')} 
                style={styles.logoBackground}
                //Thêm resizeMode giúp cho hình fit vừa vào width và height được set ở style logoBackground
                resizeMode='contain'    
              />
              <Image 
                source={require('../assets/images/logo.png')} 
                style={styles.logo} 
                resizeMode='contain'
              />
            </View>

            <Text style={styles.textHeader}>Currency Converter</Text>
            {/* Nếu đang loading thì sử dụng dâu "?" Nếu đang không loading sử dụng dấu ! */}
            {isLoading ? (
              <ActivityIndicator color={colors.white} size="large" />
            ):(
            <>
              <ConversionInput
              text={baseCurrency}
              value={value}
              
              onButtonPress={() => navigation.push('CurrencyList', 
              {title: 'Base Currency', 
              //activeCurrency: baseCurrency,
              //onChange: (currrency) => setbaseCurrency(currrency),
              isBaseCurrency: true,
            }) }
              onChangeText={(text) => setValue(text) }
              keyboardTypeT = "numeric"          
            />
            
            <ConversionInput
              text={quoteCurrency}
              value={
                // sử dụng parseFloat là vì khi bạn input gt từ bàn phím nó sẽ chỉ nhận giá trị string
                // parseFloat giúp đổi từ string sang dạng float number
                value && `${(parseFloat(value) * conversionRate).toFixed(2)}`
              
              }
              editable={false}
              onButtonPress={() => 
                navigation.push('CurrencyList',  
                {title: 'Second Currency', 
                //activeCurrency: quoteCurrency,
                //onChange:(currrency) =>setquoteCurrency(currrency)
                isBaseCurrency:false
              }) }
              
            />

            <Text style = {styles.text}>
              1 {baseCurrency} = {conversionRate} {quoteCurrency} as of {format(new Date(),'MMM do, yyyy')}
            </Text>

            <Button 
              text="Currency Swap"
              onButtonPress={() => swapCurrencies()}
            />
            </>
            )}
            {/* Vị tri đặt thẻ View dưới đây cũng quan trọng
            Nếu để dưới thì màn hình bạn sẽ có thêm khoảng trống ở dưới 
            Ngược lại nếu để lên đầu thì sẽ có khoảng trống ở trên */}
            {/* <View style={{ height: screen.height }} /> */}
            
            {/* Khi thực hiện KeyboardSpace ta sẽ cmt phần useEffect và <View> ở trên
            onToggle event xảy ra khi <KeyboardSpacer> xảy ra 
            onToggle này có tham số là keyboardIsVisblee và nhận gt boolean theo gt trả về bên file KeyboardSpacer.js
            */}

            <KeyboardSpacer onToggle={(keyboardIsVisiblee) => setScrollEnabled(keyboardIsVisiblee)} />
            
            
          </View>
        </ScrollView>
      </View>
    
      
    )
    
}

