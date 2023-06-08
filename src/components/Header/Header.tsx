/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useUserContext from '../../hooks/useUserContext';
import useFetch from '../../hooks/useFetch';
import shieldLogo from '../../assets/meu-time-shield.svg';
import meuTime from '../../assets/meu-time.svg';
import useLocalStorage from '../../hooks/useLocalStorage';

const Header = () => {
  const navigate = useNavigate();
  const { user, setUser } = useUserContext();
  const { me } = useFetch();
  const { getStorage, cleanStorage } = useLocalStorage();

  const logOut = () => {
    setUser((prevUser) => ({ ...prevUser, isLogged: false }));
    navigate('/', { replace: true });
    cleanStorage();
  };

  useEffect(() => {
    const { key } = getStorage();

    const getUserData = async () => {
      try {
        const data = await me(key);
        setUser({
          firstName: data.account.firstname,
          lastName: data.account.lastname,
          reqCurrent: data.requests.current,
          reqLimit: data.requests.limit_day,
          plan: data.subscription.plan,
          isLogged: true,
        });
      } catch (err) {
        console.log(err);
      }
    };

    if (key) {
      getUserData();
    }
  }, []);

  return (
    <div className="flex justify-between items-center mt-10 mb-28">
      <div className="flex gap-x-2">
        <img src={shieldLogo} alt="logo" className="w-8" />
        <img src={meuTime} alt="logo" className="w-28" />
      </div>

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
        <div className="flex flex-col items-end text-right">
          <span className="font-semibold">
            {user?.firstName} {user?.lastName}
          </span>

          <button
            className="text-primary-01 text-sm cursor-pointer text-right"
            onClick={() => logOut()}
            type="button"
          >
            LogOut
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
