import {calculator} from "./components/Calculator";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex p-10 justify-center">
      <Calculator />
    </div>
  )
}

export default App
