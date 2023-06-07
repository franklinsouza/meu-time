import Breadcrumbies from '../../components/Breadcrumbies';
import Header from '../../components/Header';
import useLocalStorage from '../../hooks/useLocalStorage';
import Form from './components/Form';

const SelectTeam = () => {
  const { getStorage } = useLocalStorage();
  const { hasTeam } = getStorage();

  return (
    <div className="h-full bg-body bg-no-repeat bg-cover bg-top">
      <div className="container mx-auto max-w-[1128px] px-3.5">
        <Header />
        {hasTeam && <Breadcrumbies />}
        <div className="flex justify-center">
          <div className="flex flex-col max-w-[450px]">
            <p className="font-semibold text-2xl leading-8 mb-6 text-center">
              Preencha os campos e fique
              <br />
              atualizado sobre seu time de coração.
            </p>

            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectTeam;
