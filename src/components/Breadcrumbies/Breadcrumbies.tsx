import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Breadcrumbies = () => {
  return (
    <ul className="flex mb-14">
      <li>
        <Link to="/select-team">Selecionar Time</Link>
      </li>
      <li>
        <ChevronRight />
      </li>
      <li>
        <Link to="/dashboard" className="text-primary-01">
          Dashboard
        </Link>
      </li>
    </ul>
  );
};

export default Breadcrumbies;
