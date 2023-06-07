import Form from './components/Form';
import shieldLogo from '../../assets/meu-time-shield.svg';
import meuTime from '../../assets/meu-time.svg';

const Login = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full bg-body bg-no-repeat bg-cover bg-top">
      <div className="mb-9 flex flex-col justify-center items-center">
        <img src={shieldLogo} alt="Meu time escudo" className="mb-5 w-20" />
        <img src={meuTime} alt="Meu time" className="w-40" />
      </div>

      <p className="font-semibold text-2xl mb-8">
        Entre com sua key de autenticação
      </p>

      <Form />

      <p className="text-sm mt-4">
        Não tem uma key? Consiga a sua{' '}
        <a
          href="https://dashboard.api-football.com/register"
          target="_blank"
          className="text-primary-01"
          rel="noreferrer"
        >
          aqui.
        </a>
      </p>
    </div>
  );
};

export default Login;
