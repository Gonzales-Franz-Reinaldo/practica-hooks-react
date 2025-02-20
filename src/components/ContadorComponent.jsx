import { useCounter } from "../hooks/useCounter"

export const ContadorComponent = () => {

  const { counter, increment, decrement, reset } = useCounter(0);

  return (
    <>
      <h1>Contador: {counter}</h1>
      <button className="btn btn-primary" onClick={() => increment(1)}>+1</button>
      <button className="btn btn-danger" onClick={() => reset()}>Reset</button>
      <button className="btn btn-primary" onClick={() => decrement(3, false)}> -1</button>
    </>
  )
}
