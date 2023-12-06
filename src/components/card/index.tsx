import { useStore } from '../../store';
import { CardProps } from '../../type';
import { getColorStyle } from '../../utils';

export const Card: React.FC<CardProps> = ({ card, state, color, idx }) => {
  const { setTargetRow, handleMove, setDOMType, setCurrentRow } = useStore();
  const handleClickCard = () => {
    console.log('click card');
  };
  const handleDrag = (e) => {
    e.stopPropagation();
    setDOMType('card');
    setCurrentRow(idx);
  };
  const handleDragEnd = () => {
    handleMove();
  };
  // TODO 节流
  const handleDragEnter = () => {
    setTargetRow(idx);
  };
  return (
    <div
      className="mb-2 bg-white p-2 rounded-md shadow cursor-pointer select-none"
      onClick={handleClickCard}
      draggable
      onDragStart={handleDrag}
      onDragEnd={handleDragEnd}
      onDragEnter={handleDragEnter}
    >
      <p className="text-slate-800 mb-2">{card.name}</p>
      <p className="rounded-lg p-1 inline-block" style={getColorStyle(color)}>
        {state}
      </p>
    </div>
  );
};
