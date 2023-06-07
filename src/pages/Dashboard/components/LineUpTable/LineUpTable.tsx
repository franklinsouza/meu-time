type LineUpProps = {
  formation: string;
  played: number;
};

const LineUpTable = ({ lineups }: { lineups: LineUpProps[] }) => {
  return (
    <table className="table-auto w-full bg-secondary-01">
      <thead className="bg-[#222027]">
        <tr>
          <th className="p-3">
            <span className="opacity-70">Formação</span>
          </th>
          <th className="p-3">
            <span className="opacity-70">Vezes</span>
          </th>
        </tr>
      </thead>
      <tbody className="text-center">
        {lineups.length ? (
          lineups.map((lineup) => (
            <tr key={lineup.formation} className="even:bg-[#222027]">
              <td>
                <span className="opacity-60">{lineup.formation}</span>
              </td>
              <td className="p-2">
                <span className="opacity-60">{lineup.played}</span>
              </td>
            </tr>
          ))
        ) : (
          <tr className="even:bg-[#222027]">
            <td colSpan={2} className="p-2">
              <span className="opacity-60">Não há informações</span>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default LineUpTable;
