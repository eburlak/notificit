import Noteit from '../package';
import './style.css';

window.addEventListener('load', () => {
  const noteit = new Noteit();
  const buttons = document.querySelectorAll(
    '[data-noteit-message], [data-noteit-type]',
  );

  //@ts-expect-error: ok
  window.noteit = noteit;

  buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
      let type = button.getAttribute('data-noteit-type'),
        message = button.getAttribute('data-noteit-message'),
        delay = button.getAttribute('data-noteit-delay');
      if (type === 'loading-on') {
        noteit.loadingOn();
      } else if (type === 'loading-off') {
        noteit.loadingOff();
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

        noteit.addMessage(newMessage);
      }
    });
  });
  document.querySelectorAll('[data-noteit-clear]').forEach((button) => {
    button.addEventListener('click', () => {
      noteit.clear();
    });
  });
});
