import React from 'react';
import { TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Entypo } from '@expo/vector-icons';

import Home from '../screen/Home';
import Option from '../screen/Option';
import CurrencyList from '../screen/CurrencyList';
import colors from '../constants/colors';
import { ConversionContextProvider } from '../util/ConversionContext';
// Cấu trúc của một navigator luôn được bọc trong một thẻ <NavigationContainer> (1)
// Trong thẻ (1) lại được bọc trong một cái <abc.Navigatoir> rồi sau đó là <abc.Screen>
// Cách 1
const MainStack = createStackNavigator();
const MainStackScreen = () => (
  <MainStack.Navigator>
    <MainStack.Screen
      name="Home"
      component={Home}
      options={{ headerShown: false }}
    />
    <MainStack.Screen name="Option" component={Option} />
  </MainStack.Navigator>
);

const ModalStack = createStackNavigator();
const ModalStackScreen = () => (
  <ModalStack.Navigator mode="modal">
    <ModalStack.Screen
      name="Main"
      component={MainStackScreen}
      options={{ headerShown: false }}
    />
    <ModalStack.Screen
      name="CurrencyList"
      component={CurrencyList}
      // Đổi tên header cho từng trang khác nhau bằng options
      options={({ navigation, route }) => ({
        //route đóng vai trò như navigation (VD: Navigation.pop()) 
        //route.params sẽ giúp ta truy cập vào thông tin title từng trang mà ta đặt code ở bên trang home thẻ <ConversionInput>
        //Ta nên có thêm điều kiện là route.params để nó sẽ lấy tên component mặc định khi ta ko set title 
        title: route.params && route.params.title,
        headerLeft: null,
        headerRight: () => (
          <TouchableOpacity
            onPress={() => navigation.pop()}
            style={{ paddingHorizontal: 10 }}
          >
            <Entypo name="cross" size={30} color={colors.blue} />
          </TouchableOpacity>
        ),
      })}
    />
  </ModalStack.Navigator>
);

export default () => (
  <NavigationContainer>
    <ConversionContextProvider>
      <ModalStackScreen />
    </ConversionContextProvider>
  </NavigationContainer>
);

// Cách 2
// const MainStack = createStackNavigator();
// const MainStackScreen = () => (
//       <NavigationContainer>
//         <MainStack.Navigator>
//           <MainStack.Screen name="Home" component={Home}  options={ {headerShown:false } } />
//           <MainStack.Screen name="Option" component={Option} />
//           <MainStack.Screen 
//           name="CurrencyList" 
//           component={CurrencyList} 
//           // Đổi tên cho từng trang khác nhau
//           options = {({route}) => ({
//             //route đóng vai trò như navigation (VD: Navigation.pop()) 
//             //route.params sẽ giúp ta truy cập vào thông tin title từng trang mà ta đặt code ở bên trang home thẻ <ConversionInput>
//             //Ta nên có thêm điều kiện là route.params để nó sẽ lấy tên component mặc định khi ta ko set title 
//               title: route.params && route.params.title
//           })}
//           />
//         </MainStack.Navigator>
//       </NavigationContainer>
      
// )


// const ModalStack = createStackNavigator();
// const ModalStackScreen = () => (
//   <NavigationContainer>
//     <ModalStack.Navigator mode="modal">
//       <ModalStack.Screen 
//         name="Main"
//         component={MainStackScreen}
//         options={{ headerShown:false }}
//       />

//       <ModalStack.Screen
//       name="CurrencyList"
//       component={CurrencyList}
//       options={({ navigation, route }) => ({
//         title: route.params && route.params.title,
//         headerLeft: null,
//         headerRight: () => (
//           <TouchableOpacity
//             onPress={() => navigation.pop()}
//             style={{ paddingHorizontal: 10 }}
//           >
//             <Entypo name="cross" size={30} color={colors.blue} />
//           </TouchableOpacity>
//         ),
//       })}
//     />


//     </ModalStack.Navigator>
//   </NavigationContainer>
// )

// export default ModalStackScreen;
