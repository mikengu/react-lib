## Button Examples

`import {Button} from 'react-component-library'`

### Default
```js
<Button>Button</Button>
```

### With Styles
```js
<Button 
  styles={{
    background: 'honeydew',
    color: 'black',
    fontSize: '125%',
    padding: 10
}}
>
  Button
</Button>
```

### With Loader
```js
const [loading, setLoading] = React.useState(false);

const toggleLoading = React.useCallback(() => {
  setLoading(loading => !loading)
}, [setLoading]);

<Button 
  isLoading={loading}
  loaderColor={'thistle'}
  onClick={toggleLoading}
>
  Click Me
</Button>
```
