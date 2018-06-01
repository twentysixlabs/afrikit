// @flow
import ReactDOM from 'react-dom';
import addDOMEventListener from './dom-event-listener';

export default function addEventListenerWrap(target, eventType, cb) {
  /* eslint camelcase: 2 */
  const callback = ReactDOM.unstable_batchedUpdates
    ? function run(e) {
        ReactDOM.unstable_batchedUpdates(cb, e);
      }
    : cb;
  return addDOMEventListener(target, eventType, callback);
}
