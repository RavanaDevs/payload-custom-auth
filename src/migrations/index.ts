import * as migration_20250213_110925_clerk_auth_user from './20250213_110925_clerk_auth_user';

export const migrations = [
  {
    up: migration_20250213_110925_clerk_auth_user.up,
    down: migration_20250213_110925_clerk_auth_user.down,
    name: '20250213_110925_clerk_auth_user'
  },
];
