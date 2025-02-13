import * as migration_20250213_100434_initial from './20250213_100434_initial';

export const migrations = [
  {
    up: migration_20250213_100434_initial.up,
    down: migration_20250213_100434_initial.down,
    name: '20250213_100434_initial'
  },
];
