
import React from 'react';
import Navigation from './config/Navigation';
// export api là một dạng function 'const" nên phải bỏ chữ api trong ngoặc nhọn
import { api }  from './util/api'
import { ConversionContextProvider } from './util/ConversionContext'

// Query api parameters để có thể biết được từ baseCurrency đổi sang các đơn vị tiền tệ khác tỉ lệ như thế nào
// api("/latest?base=USD")
//     //.then sẽ lấy giá trị Promise.resolve bên file index.js
//     .then(response => {
//         console.log('response', response)
//     })
//     // .catch sẽ lấy giá trị Promise.reject
//     .catch(error => {
//         console.log('err', error)
//     })


export default () => (
    <ConversionContextProvider>
        <Navigation />
    </ConversionContextProvider>
    );