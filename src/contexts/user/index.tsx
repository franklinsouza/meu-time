import { createContext, useMemo, useState } from 'react';
import { User, UserContextProps } from './user.type';

const UserContext = createContext<UserContextProps>({} as UserContextProps);

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const initialValue: User = {
    firstName: '',
    lastName: '',
    reqCurrent: '',
    reqLimit: '',
    plan: '',
    key: '',
    isLogged: false,
  };

  const [user, setUser] = useState(initialValue);
  const userContextValue = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <UserContext.Provider value={userContextValue}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
