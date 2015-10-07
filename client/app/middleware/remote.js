export default socket => store => next => action => {
  console.log('socket middleware:', action);
  const { meta } = action;
  if (meta && meta.remote) {
    socket.emit('action', action);
  }
  return next(action);
}
