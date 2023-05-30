import { useCallback, useEffect } from 'react';
import useUserContext from '../../hooks/useUserContext';
import useFetch from '../../hooks/useFetch';

const Header = () => {
  const { user, setUser } = useUserContext();
  const { me } = useFetch();

  const getUserData = useCallback(async () => {
    const data = await me();

    setUser({
      firstName: data.account.firstname,
      lastName: data.account.lastname,
      reqCurrent: data.requests.current,
      reqLimit: data.requests.limit_day,
      plan: data.subscription.plan,
      isLogged: true,
    });
  }, [me, setUser]);

  useEffect(() => {
    if (!user?.isLogged) {
      getUserData();
    }
  }, [user, setUser, getUserData, user?.isLogged]);

  return (
    <div className="flex justify-between items-start mt-10 mb-32">
      <div className="bg-primary-01 w-28 h-8 text-center" />

      <div className="flex gap-x-2 text-xs uppercase">
        <p>
          <span className="text-primary-01">Plano: </span>
          {user?.plan}
        </p>
        /
        <p>
          <span className="text-primary-01">Requisições: </span>
          {user?.reqCurrent}
        </p>
        /
        <p>
          <span className="text-primary-01">Limite: </span>
          {user?.reqLimit}
        </p>
      </div>

      <div className="flex items-center">
        <div className="text-right flex flex-col mr-2">
          <span className="font-semibold">
            {user?.firstName} {user?.lastName}
          </span>

          <p className="text-primary-01 text-sm">LogOut</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
