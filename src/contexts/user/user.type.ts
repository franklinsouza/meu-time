import { Dispatch, SetStateAction } from 'react';

export type User = {
  firstName?: string;
  lastName?: string;
  reqCurrent?: string;
  reqLimit?: string;
  plan?: string;
  key?: string;
  isLogged?: true | false;
};

export type UserContextProps = {
  user?: User;
  setUser: Dispatch<SetStateAction<User>>;
};
