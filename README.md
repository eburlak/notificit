
## notificit

Demo:
[eburlak.github.io/notificit](https://eburlak.github.io/notificit)

Usage:
```
npm i notificit

import notificit from 'notificit';

const Notifications = new notificit({
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