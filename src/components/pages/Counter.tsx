import { useCounterViewModel } from "../../viewmodels/CounterViewModel";

export const Counter = () => {
  const { count, incrementCounter, decrementCounter, incrementCounterByAmount } =
    useCounterViewModel();

  return (
    <>
      <button aria-label="Increment value" onClick={incrementCounter}>
        Increment
      </button>
      <span>{count}</span>
      <button aria-label="Decrement value" onClick={decrementCounter}>
        Decrement
      </button>
      <button aria-label="Increment Amount" onClick={() => incrementCounterByAmount(10)}>
        incrementByAmount
      </button>
    </>
  );
};
