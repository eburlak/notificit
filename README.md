
## notificit

Demo:
[eburlak.github.io/notificit](https://eburlak.github.io/notificit)

Usage:
```
npm i notificit

import Notificit from 'notificit';

const Notifications = new Notificit({
  close: {
    button: true,
    area: true,
  },
  animation: {
    time: 300
  },
  classNames: {
    container: ['notificit']
  }
});

Notifications.addMessage({
  message: 'Success message',
  type: 'success',
  delay: 3000,
});
```