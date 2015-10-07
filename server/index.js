import configureStore from './src/configureStore';
import startServer from './src/server';

const store = configureStore();
startServer(store);
