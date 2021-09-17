import React, {useContext} from 'react'
import { StatusBar, FlatList, View, StyleSheet } from 'react-native'
import colors from '../constants/colors'
import Currencies from '../data/currencies.json'
import { RowItem, RowSeperator } from '../components/RowItem'
import { useSafeArea } from 'react-native-safe-area-context';
import { Entypo } from '@expo/vector-icons'
import { ConversionContext } from '../util/ConversionContext';

const styles = StyleSheet.create({

    view:{
        flex:1,
        backgroundColor: colors.white
    },
    icon:{
        width:30,
        height:30,
        backgroundColor:colors.blue, 
        borderRadius:15,
        alignItems:'center',
        justifyContent:'center'
    }

})

export default ({navigation, route = {} }) => {
    // Để các nội dung màn hình se có không gian và tránh các thanh statusbar và thanh indicator ở trên đt
    const insets = useSafeArea();
    const {
        baseCurrency,
        quoteCurrency, 
        setbaseCurrency,
        setquoteCurrency,
      } = useContext (ConversionContext);
    
    const params = route.params || {};
    const { isBaseCurrency } = params;

    return(
        <View style = {styles.view} >
             <StatusBar barStyle='dark-content' backgroundColor={colors.white} />
            
            <FlatList
                data={Currencies}
                //renderItem sẽ duyệt qua từng item có trong data
                
                renderItem ={({item}) => {
                    //const selected = activeCurrency === item;
                    let selected = false;

                    if (isBaseCurrency && item === baseCurrency) {
                        selected = true;
                    } else if (!isBaseCurrency && item === quoteCurrency) {
                        selected = true;
                    }
                    return (
                    <RowItem 
                        text={item}
                        // if onChange với item trong flatlist thay đổi là true thì sẽ thay đổi baseCurrency ở bên Home.js
                        onPress={() => {
                            if(isBaseCurrency) {
                                // onChange(item)
                                if (params.isBaseCurrency) {
                                    setbaseCurrency(item);
                                  } else {
                                    setquoteCurrency(item);
                                  }
                            }
                            navigation.pop();



                        }}
                        // Nếu selected là true thì sẽ in ra tên của đơn vị tiền tệ đi kèm là icon
                        Icon = {
                            //console.log(selected),
                            selected && (
                            <View style = {styles.icon}>
                                <Entypo name="check" size={20} color={colors.white} />
                            </View>
                            )
                        }
                    
                        />
                    )
                }}
                // Flatlist cung cấp chức năng cấp key cho từng item
                keyExtractor={item => item} 
                ItemSeparatorComponent ={() => <RowSeperator />}

                // <ListFooterComponent> Để các nội dung màn hình se có không gian và tránh các thanh statusbar và thanh indicator ở trên đt
                ListFooterComponent ={() => <View style={{paddingBottom: insets.bottom}} /> }


            />
        </View>
    
    )
}