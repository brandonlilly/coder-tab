import Server from 'socket.io';

export default function startServer(store) {
  console.log('socket server starting..');

  const io = new Server().attach(8090);

  store.subscribe(
    () => io.emit('state', store.getState())
  );

  io.on('connection', (socket) => {
    console.log('connection made');
    
    socket.emit('state', store.getState());
    socket.on('action', action => store.dispatch(action));
  });
};
