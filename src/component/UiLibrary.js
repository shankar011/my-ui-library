import { h, init } from 'snabbdom';
import snabbdomClass from '../../node_modules/snabbdom/package.json';
import snabbdomProps from '../../node_modules/snabbdom/package.json';
import snabbdomEvents from '../../node_modules/snabbdom/package.json';

const patch = init([snabbdomClass, snabbdomProps, snabbdomEvents]);

export function createApp(root, template) {
  let state = {};

  function updateState(newState) {
    state = { ...state, ...newState };
    updateView(template(state));
  }

  function updateView(newVNode) {
    patch(root, newVNode);
  }

  return {
    updateState,
    updateView,
  };
}
