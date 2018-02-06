### In this package I just added the axios header
- This package is helpful for ajax call

### How to set up ?
- set the csrf token in your main file in meta tag 
```
......
<meta name="csrf-token" content="csrf-token-here">
......
```
- Install npm package using ```$ npm i callclient --save```

### How to use ?
- import in file ```import { callClient} from 'callclient';```
```
callClient.get(url, params = {})
    .then((response) => {
        const values = response.data;
    })
    .catch(() => {
        console.log('Hey Error aayo yar');
    });
```

- For the multipartAjax we can do like this 
```
    import { callMultiPartAjax } from 'callclient';
    
    callMultiPartAjax.get(url, payload)
        .then((response) => {
            console.log('working cool');
        })
        .catch(() => {
            console.log('Hey Error aayo yar');
        });
```
