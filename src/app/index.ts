import Notificit from '../package';
import './style.css';

window.addEventListener('load', () => {
  const notificit = new Notificit();
  const buttons = document.querySelectorAll(
    '[data-notificit-message], [data-notificit-type]',
  );

  //@ts-expect-error: ok
  window.notificit = notificit;

  buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
      let type = button.getAttribute('data-notificit-type'),
        message = button.getAttribute('data-notificit-message'),
        delay = button.getAttribute('data-notificit-delay');
      if (type === 'loading-on') {
        notificit.loadingOn();
      } else if (type === 'loading-off') {
        notificit.loadingOff();
      } else {
        let newMessage: {
          message: string;
          type: string;
          delay?: number;
        } = {
          message,
          type,
        };

        if (delay) {
          newMessage.delay = +delay;
        }

        notificit.addMessage(newMessage);
      }
    });
  });
  document.querySelectorAll('[data-notificit-clear]').forEach((button) => {
    button.addEventListener('click', () => {
      notificit.clear();
    });
  });
});
