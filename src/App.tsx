import { Col } from './components/col';
import { useStore } from './store';

function App() {
  // const [count, setCount] = useState(0);
  const { list } = useStore();
  return (
    <div className="container flex flex-row justify-start items-start h-full p-5">
      {list.map((item, idx) => (
        <Col col={item} idx={idx} key={item.id} />
      ))}
    </div>
  );
}

export default App;
