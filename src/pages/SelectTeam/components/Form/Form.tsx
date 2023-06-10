/* eslint-disable react-hooks/exhaustive-deps */
import Select from 'react-select';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import selectStyles from './select-styles';
import useFetch from '../../../../hooks/useFetch';
import useLocalStorage from '../../../../hooks/useLocalStorage';
import LoadingBall from '../../../../components/LoadingBall';
import { DataApi, SelectActions } from './form.type';

type DataStur = {
  id: number;
  name: string;
};

const Form = () => {
  const navigate = useNavigate();
  const { countries, seasons, leagues, teams } = useFetch();
  const { getStorage, setStorage } = useLocalStorage();
  const [dataCountriesApi, setDataCountriesApi] = useState<DataApi>({
    isDisable: true,
    isLoading: false,
    optionSelected: '',
    data: [],
  });
  const [dataSeasonsApi, setDataSeasonsApi] = useState<DataApi>({
    isDisable: true,
    isLoading: false,
    optionSelected: '',
    data: [],
  });
  const [dataLeaguesApi, setDataLeaguesApi] = useState<DataApi>({
    isDisable: true,
    isLoading: false,
    optionSelected: '',
    data: [],
  });
  const [dataTeamsApi, setDataTeamsApi] = useState<DataApi>({
    isDisable: true,
    isLoading: false,
    optionSelected: '',
    data: [],
  });
  const [submitControl, setSubmitControl] = useState({
    isDisable: true,
    isLoading: false,
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSubmitControl((prevData) => ({
      ...prevData,
      isLoading: true,
    }));

    navigate('/dashboard', { replace: true });
  };

  const handleChange = (selectValue: any, selectName: any): void => {
    const { value } = selectValue;
    const { name } = selectName;

    const selectActions: SelectActions = {
      country: () => {
        setDataCountriesApi((prevData) => {
          return {
            ...prevData,
            optionSelected: value,
          };
        });
      },
      season: () => {
        setDataSeasonsApi((prevData) => {
          return {
            ...prevData,
            optionSelected: value,
          };
        });
      },
      league: () => {
        setDataLeaguesApi((prevData) => {
          return {
            ...prevData,
            optionSelected: value,
          };
        });
      },
      team: () => {
        setDataTeamsApi((prevData) => {
          return {
            ...prevData,
            optionSelected: value,
          };
        });

        setSubmitControl((prevData) => ({
          ...prevData,
          isDisable: false,
        }));
      },
    };

    if (name && selectValue) {
      selectActions[name]();
      setStorage({ [name]: value });
    }
  };

  const { key } = getStorage();

  useEffect(() => {
    const getCountries = async () => {
      try {
        setDataCountriesApi((prevData) => ({
          ...prevData,
          isDisable: true,
          isLoading: true,
        }));

        const { data } = await countries(key);

        setDataCountriesApi((prevData) => {
          const transformDataForSelect = data.map(
            ({ name }: { name: string }) => ({
              value: name,
              label: name,
            })
          );

          return {
            ...prevData,
            data: transformDataForSelect,
            isDisable: false,
            isLoading: false,
          };
        });
      } catch (err) {
        console.log(err);
      }
    };

    if (key) {
      getCountries();
    }
  }, [countries]);

  useEffect(() => {
    const getSeasons = async () => {
      try {
        setDataSeasonsApi((prevData) => ({
          ...prevData,
          isDisable: true,
          isLoading: true,
        }));

        const { data } = await seasons();
        console.log(data);

        setDataSeasonsApi((prevData) => {
          const transformDataForSelect = data.map((year: number) => ({
            value: year,
            label: year,
          }));

          return {
            ...prevData,
            data: transformDataForSelect,
            isDisable: false,
            isLoading: false,
          };
        });
      } catch (err) {
        console.log(err);
      }
    };

    if (dataCountriesApi.optionSelected) {
      getSeasons();
    }
  }, [seasons, dataCountriesApi.optionSelected]);

  useEffect(() => {
    const getLeagues = async () => {
      const country = dataCountriesApi.optionSelected;
      const season = dataSeasonsApi.optionSelected;

      try {
        setDataLeaguesApi((prevData) => ({
          ...prevData,
          isDisable: true,
          isLoading: true,
        }));

        if (country && season) {
          const { data } = await leagues(country, season);

          setDataLeaguesApi((prevData) => {
            const transformDataForSelect = data.map(
              ({ league }: { league: DataStur }) => ({
                value: league.id,
                label: league.name,
              })
            );

            return {
              ...prevData,
              data: transformDataForSelect,
              isDisable: false,
              isLoading: false,
            };
          });
        }
      } catch (err) {
        console.log(err);
      }
    };

    if (dataSeasonsApi.optionSelected) {
      getLeagues();
    }
  }, [leagues, dataCountriesApi.optionSelected, dataSeasonsApi.optionSelected]);

  useEffect(() => {
    const getTeams = async () => {
      const country = dataCountriesApi.optionSelected;
      const season = dataSeasonsApi.optionSelected;
      const league = dataLeaguesApi.optionSelected;

      try {
        setDataTeamsApi((prevData) => ({
          ...prevData,
          isDisable: true,
          isLoading: true,
        }));

        if (country && season && league) {
          const { data } = await teams(country, season, league);

          console.log(data);

          setDataTeamsApi((prevData) => {
            const transformDataForSelect = data.map(
              ({ team }: { team: DataStur }) => ({
                value: team.id,
                label: team.name,
              })
            );

            return {
              ...prevData,
              data: transformDataForSelect,
              isDisable: false,
              isLoading: false,
            };
          });
        }
      } catch (err) {
        console.log(err);
      }
    };

    if (dataLeaguesApi.optionSelected) {
      getTeams();
    }
  }, [
    teams,
    dataCountriesApi.optionSelected,
    dataSeasonsApi.optionSelected,
    dataLeaguesApi.optionSelected,
  ]);

  return (
    <form onSubmit={handleSubmit}>
      <Select
        className="mb-3"
        styles={selectStyles}
        isLoading={dataCountriesApi.isLoading}
        isDisabled={dataCountriesApi.isDisable}
        name="country"
        options={dataCountriesApi.data}
        defaultValue={{ value: '', label: 'País' }}
        onChange={handleChange}
      />

      <Select
        className="mb-3"
        styles={selectStyles}
        isLoading={dataSeasonsApi.isLoading}
        isDisabled={dataSeasonsApi.isDisable}
        options={dataSeasonsApi.data}
        name="season"
        defaultValue={{ value: '', label: 'Temporada' }}
        onChange={handleChange}
      />

      <Select
        className="mb-3"
        styles={selectStyles}
        isLoading={dataLeaguesApi.isLoading}
        isDisabled={dataLeaguesApi.isDisable}
        options={dataLeaguesApi.data}
        name="league"
        defaultValue={{ value: '', label: 'Liga' }}
        onChange={handleChange}
      />

      <Select
        className="mb-3"
        styles={selectStyles}
        isLoading={dataTeamsApi.isLoading}
        isDisabled={dataTeamsApi.isDisable}
        options={dataTeamsApi.data}
        name="team"
        defaultValue={{ value: '', label: 'Time' }}
        onChange={handleChange}
      />

      <button
        className="bg-primary-01 w-full h-[60px] flex justify-center items-center text-xl font-semibold disabled:opacity-40"
        type="submit"
        disabled={submitControl.isDisable}
      >
        {submitControl.isLoading ? (
          <LoadingBall styles="w-7" />
        ) : (
          'Buscar Dados'
        )}
      </button>
    </form>
  );
};

export default Form;
