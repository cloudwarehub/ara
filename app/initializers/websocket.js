export function initialize(/* application */) {
  // application.inject('route', 'foo', 'service:foo');
}

export default {
  name: 'websocket',
  initialize: function(app) {
    app.inject('controller', 'socketIOService', 'service:socket-io');
  }
};
