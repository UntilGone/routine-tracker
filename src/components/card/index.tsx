import { CardProps } from '../../type';
import { getColorStyle } from '../../utils';

export const Card: React.FC<CardProps> = ({ card, state, color }) => {
  const handleClickCard = () => {
    console.log('click card');
  };
  return (
    <div
      className="mb-2 bg-white p-2 rounded-md shadow cursor-pointer select-none"
      onClick={handleClickCard}
    >
      <p className="text-slate-800 mb-2">{card.name}</p>
      <p className="rounded-lg p-1 inline-block" style={getColorStyle(color)}>
        {state}
      </p>
    </div>
  );
};
