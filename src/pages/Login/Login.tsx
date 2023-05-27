import Form from './components/Form';

const Login = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
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
