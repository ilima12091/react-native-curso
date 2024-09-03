import { useCounter } from "../hooks";

export const CounterWithHook = () => {
  const { count, increaseBy } = useCounter({});

  return (
    <>
      <h3>
        Contador: <small>{count}</small>
      </h3>
      <div>
        <button onClick={() => increaseBy(1)}>+1</button>
        <button onClick={() => increaseBy(-1)}>-1</button>
      </div>
    </>
  );
};
