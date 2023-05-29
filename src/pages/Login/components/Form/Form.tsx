import { useRef, useState } from 'react';
import { LogIn } from 'lucide-react';
import Input from '../Input';
import LoadingBal from '../../../../components/LoadingBall';
import useFetch from '../../../../hooks/useFetch';

const Form = () => {
  const { me } = useFetch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const refKeyField = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    const key = refKeyField.current?.value;

    if (!key) {
      setError('Digite uma key');
      return;
    }

    try {
      setLoading(true);
      await me(key);

      // save key on localStorage
      // save isLogged context
      // Redirect to select team
    } catch (_) {
      setError('Key não existente. Ela está correta? 🤔');
    } finally {
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
          ref={refKeyField}
        />

        <button
          className="bg-primary-01 w-[60px] h-[60px] flex justify-center items-center font-semibold"
          type="submit"
          disabled={loading}
        >
          {loading ? <LoadingBal styles="w-7" /> : <LogIn />}
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