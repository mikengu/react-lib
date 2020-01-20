## Sidebar Examples

`import {Sidebar} from 'react-component-library'`

### Default
```js
const items = [
  {name: 'home', label: 'Home'},
  {name: 'orders', label: 'Orders'},
  {name: 'setting', label: 'Setting'},
];

<Sidebar items={items} />
```

### With Icons
```js
import {Home, ListAlt, Settings} from '@material-ui/icons';

const items = [
  {name: 'home', label: 'Home', icon: Home},
  {name: 'orders', label: 'Orders', icon: ListAlt},
  {name: 'setting', label: 'Setting', icon: Settings},
];

<Sidebar items={items} />
```


### Nested List
```js

const items = [
  {name: 'home', label: 'Home'},
  {
    name: 'example',
    label: 'Example',
    items: [
      {
        name: 'profile',
        label: 'Profile',
        items: [
          {
            name: 'mike',
            label: 'Mike',
            items: [
              {
                name: 'mike2',
                label: 'Mike2',
                items: [
                  {
                    name: 'mike3',
                    label: 'Mike3',
                    items: [
                      {
                        name: 'mike3',
                        label: 'Mike3'
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }]
  },
  {name: 'security', label: 'Security'},
  {
    name: 'notifications',
    label: 'Notifications',
    items: [
      {name: 'email', label: 'Email'},
      {
        name: 'mobile',
        label: 'Mobile',
        items: [
          {name: 'text', label: 'Text'},
          {name: 'call', label: 'Call'}
        ]
      }
    ]
  },
  {
    name: 'orderStatus',
    label: 'Order Status',
    items: [
      {name: 'past_items', label: 'Past Orders'},
      {name: 'current_items', label: 'Current Orders'}
    ]
  },
  {
    name: 'settings',
    label: 'Settings'
  }
];

<Sidebar items={items} theme={'dark'} />
```
