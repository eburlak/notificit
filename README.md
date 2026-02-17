
## Noteit

Demo:
[eburlak.github.io/noteit](https://eburlak.github.io/noteit)

Usage:
```
npm i noteit

import Noteit from 'noteit';

const Notifications = new Noteit({
  close: {
    button: true,
    area: true,
  },
  animation: {
    time: 300
  },
  classNames: {
    container: ['noteit']
  }
});

Notifications.addMessage({
  message: 'Success message',
  type: 'success',
  delay: 3000,
});
```