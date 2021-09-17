import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import colors from '../constants/colors';

const styles = StyleSheet.create({
  row:{
 // khoảng cách giữa các text với lề trái/phải là 20
 paddingHorizontal: 20,
 paddingVertical: 30,
 // flex direction giúp cho nội dung như text, icon cùng 1 line
 flexDirection: 'row',
 // alignItem giúp cho nội dung trên line đều được đi qua trung điểm của một đoạn thằng
 alignItems : "center",
 // justifyContent giúp tạo khoảng cách giữa các nội dung trong cùng 1 row
 justifyContent:"space-between"

  },
  text:{
    fontSize: 20,
    color:  colors.text
  },  

  seperator:{
    backgroundColor: colors.border,
    // Phần height cho chúng ta một line có pixel nhỏ nhất có thể ở trên thiết bị virtual
    height: StyleSheet.hairlineWidth,
    marginLeft: 16
    
}
})

// Component dưới đây giống như thể hiện tính đa hình
// Ta có thể thấy ở trang này thì có 2 thứ cần hiện thỉ là text và 1 icon đi kèm
// Vậy ta tạo ra component có tên RowItem với 2 parameters như dưới
// Sau đó ben file options chỉ cần import sau đó gọi hàm và truyền tham số vào thôi !
export const RowItem = ({text,onPress,Icon}) => {
    return(
      <TouchableOpacity style={styles.row} onPress={onPress}>
        {/* Điều thú vị là chỉ cần đổi vị trí của {Icon} và <Text> là vị trí của các native component trên máy ảo cũng thay đổi */}
        <Text style={styles.text}>{text}</Text>
        {Icon}
      </TouchableOpacity>
    )

}

// or : export const RowSeperator = () => <View style={styles.seperator} />
export const RowSeperator = () => {
  return(
    <View style={styles.seperator} />
  )

}