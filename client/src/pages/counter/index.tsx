import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "@/features/counter/counterSlice";

type RootState = {
    counter: {
        value: number;
    }
}

const Counter = () => {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();
    return (
        <div>
            <div>Count: {count}</div>
            <button className="border-red" onClick={()=> dispatch(increment())}>increment</button>
            <button onClick={()=> dispatch(decrement())}>decrement</button>
        </div>
    )
}


export default Counter;