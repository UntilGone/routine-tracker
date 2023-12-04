import { ColProps } from '../../type';
import { getColorStyle, setOpacity } from '../../utils';
import { Card } from '../card';

export const Col: React.FC<ColProps> = ({ col }) => {
  const { name, color, list } = col;
  return (
    <div
      className="col_width h-full p-3 mr-2 rounded-md"
      style={{ backgroundColor: setOpacity(color, 0.1) }}
    >
      <div className="flex flex-row justify-start items-center mb-2">
        <p className="rounded-lg p-1 mr-2" style={getColorStyle(col.color)}>
          {name}
        </p>
        {list && list.length && (
          <p className="color text-gray-400">{list.length}</p>
        )}
      </div>
      {list &&
        list.map((item) => (
          <Card key={item.id} card={item} state={name} color={color} />
        ))}
    </div>
  );
};
