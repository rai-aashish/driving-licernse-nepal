import React from "react";
import withCounter from "src/hoc/withCounter";

type Props = {
  count: number;
  increment: Function;
  decrement: React.MouseEventHandler;
};

function CounterSection({ count, increment }: Props) {
  console.log(count);

  return (
    <div>
      <strong>Count: {count}</strong>
      <button onClick={() => increment()}>increase</button>
    </div>
  );
}

export default withCounter(CounterSection);
