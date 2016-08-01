A simple circle checkbox component for React Native using FontAwesome icons.

##Install:

Install using npm:

```
npm install react-native-simple-checkbox --save
```

##Example:
```js
import SimpleCheckBox from 'react-native-simple-checkbox';

<SimpleCheckBox
  onToggle={(checked) => alert('icon checked? '+checked)}
/>
```

##Dependencies:

FontAwesome icons:
[react-native-vector-icons](https://github.com/oblador/react-native-vector-icons)

##Props:

- `onToggle` : function which will be invoked with check state as a parameter
- `checked` : initial checked value  (default: false)
- `buttonColor` : color of the button (default: 'lightgrey')
- `buttonSize`: size of the button (default: 25)
- `buttonBorderColor` : color of the button border (default: 'transparent')
- `buttonBorderWidth`: width of the button border (default: 0)
- `iconSize`: size of the icon (default: 15)
- `iconColor` : color of the button (default: 'green')
- `iconImage`: checked icon from [font awesome](http://fontawesome.io/icons/)  (default: 'check')
- `disableOnClick` : disable any button presses after first click  (default: false)
