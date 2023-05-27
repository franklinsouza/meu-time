import { useState } from 'react';
import { LogIn } from 'lucide-react';
import Input from '../Input';
import LoadingBall from '../../../../LoadingBall';

const Form = () => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      setError('');
      setLoading(true);

      // await request;
      // console.log(data.key);

      // save isLogged context

      // save key on localStorage

      // Redirect to select team
    } catch (_) {
      setError('Key não existente. Ela está correta? 🤔');
    } finally {
      setError('');
      setLoading(false);
    }
  };

  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <div className="flex flex-row gap-x-1 mb-3">
        <Input
          placeholder="Ex: 220b1c3f1adca131d1f2a0851665e52eb3"
          name="key"
          disabled={loading}
          styles="w-[340px] text-xl"
        />
        <button
          className="bg-primary-01 w-[60px] h-[60px] flex justify-center items-center font-semibold"
          type="submit"
          disabled={loading}
        >
          {loading ? <LoadingBall styles="w-7" /> : <LogIn />}
        </button>
      </div>

      {error && (
        <p className="text-center text-primary-01 font-semibold text-xl">
          {error}
        </p>
      )}
    </form>
  );
};

export default Form;
