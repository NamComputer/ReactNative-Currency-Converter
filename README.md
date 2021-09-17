
  **Cách tổ chức sắp xếp tên các project trong React Native Mobile dev, tất cả thư mục dưới nằm trong thư mục cha là App**
1. Assets: chứa các ảnh/ icon cho các thành phần trên trang 
2. Component: Chứa các component (thành phân) trên màn hình điện thoại của bạn như là các nút ấn,... là thứ xây dựng nên UI của một app
3. config
4. constants:Những thứ cố định trong 1 app, vd như là màu
5. data: chứa các đơn vị tiền tệ 
6. screen: chứa các screen của app vd như home, option, currency list
7. util: Là nơi chứa các thứ làm với API, database,...
8. index: Dùng để tổng hợp các component con.

***Sau khi bạn tạo một thư mục blank bằng expo, thì hãy xóa đi file index.js và thay bằng file App của mình và chạy như bình thường*

- Mình sử dụng Expo để làm cánh cửa trung gian kết nối tới các Virtual Device. Để biết thêm thông tin truy cập https://docs.expo.dev/workflow/expo-cli/

 **MỘt số hình ảnh giao diện của app**
 ![Screenshot from 2021-09-04 14-55-24_editted](https://user-images.githubusercontent.com/75820882/133725984-43bd8fbd-2aaf-43d2-9008-6896d7cf9653.png)
![Screenshot from 2021-09-17 11-14-49](https://user-images.githubusercontent.com/75820882/133725996-2dbc492a-c184-4b3d-b0f3-08bcb9d10e8b.png)
![Screenshot from 2021-09-17 11-14-57](https://user-images.githubusercontent.com/75820882/133726011-688d9f02-a941-49a9-8bb7-ffd59a61306e.png)
