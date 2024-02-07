```html
<BaseSelect :options="options" defaultTitle="Select Item"/>
```
```js
import BaseSelect from 'src/components/BaseSelect/index.vue' //or Global component
const options = [
    {
        title: 'Google',
        value: 'google'
    },
    {
        title: 'Facebook',
        value: 'facebook'
    },
    {
        title: 'Microsoft',
        value: 'microsoft'
    }
]
