/* eslint-disable no-console */
import { Server } from 'http';

// eslint-disable-next-line import/prefer-default-export
export const registerProcessEvents = (server: Server): void => {
  process.on('uncaughtException', (err) => {
    console.error('UncaughtException', err);

    process.exit(1);
  });

  const handleSignals = (signals: NodeJS.Signals) => {
    console.error(`Exit process in responding to ${signals}`);

    console.info('Starting graceful shutdown');
    server.close();

    process.exit(0);
  };

  process.on('SIGTERM', handleSignals);
  process.on('SIGINT', handleSignals);
};
