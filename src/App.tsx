import { useState } from 'react';
import { Col } from './components/col';
import { ColType } from './type';
import { getUUID } from './utils';
import dayjs from 'dayjs';

function App() {
  // const [count, setCount] = useState(0);
  const [list, setList] = useState<ColType[]>([
    {
      id: getUUID(),
      name: 'Next up',
      color: '#ff0000',
      list: [
        {
          id: getUUID(),
          name: '测试内容',
          content: '',
          dueTo: [dayjs().unix(), dayjs().unix()],
          date: dayjs().unix(),
        },
        {
          id: getUUID(),
          name: '测试内容2',
          content: '',
          dueTo: [dayjs().unix(), dayjs().unix()],
          date: dayjs().unix(),
        },
        {
          id: getUUID(),
          name: '测试内容3',
          content: '',
          dueTo: [dayjs().unix(), dayjs().unix()],
          date: dayjs().unix(),
        },
      ],
    },
    {
      id: getUUID(),
      name: 'In Progress',
      color: '#00ff00',
      list: [
        {
          id: getUUID(),
          name: '测试内容',
          content: '',
          dueTo: [dayjs().unix(), dayjs().unix()],
          date: dayjs().unix(),
        },
        {
          id: getUUID(),
          name: '测试内容2',
          content: '',
          dueTo: [dayjs().unix(), dayjs().unix()],
          date: dayjs().unix(),
        },
        {
          id: getUUID(),
          name: '测试内容3',
          content: '',
          dueTo: [dayjs().unix(), dayjs().unix()],
          date: dayjs().unix(),
        },
      ],
    },
    {
      id: getUUID(),
      name: 'Complete',
      color: '#0000ff',
      list: [
        {
          id: getUUID(),
          name: '测试内容',
          content: '',
          dueTo: [dayjs().unix(), dayjs().unix()],
          date: dayjs().unix(),
        },
        {
          id: getUUID(),
          name: '测试内容2',
          content: '',
          dueTo: [dayjs().unix(), dayjs().unix()],
          date: dayjs().unix(),
        },
        {
          id: getUUID(),
          name: '测试内容3',
          content: '',
          dueTo: [dayjs().unix(), dayjs().unix()],
          date: dayjs().unix(),
        },
      ],
    },
  ]);
  return (
    <div className="container flex flex-row justify-start items-start h-full p-5">
      {list.map((item) => (
        <Col col={item} key={item.id} />
      ))}
    </div>
  );
}

export default App;
