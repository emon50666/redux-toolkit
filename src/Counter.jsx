import {useSelector,useDispatch} from 'react-redux'
import {increment,decrement,incrementByAmount} from './redux/CounterSlice'

const Counter = () => {
    const count = useSelector((state)=> state.counter.value)
    const dispatch = useDispatch()
    return (
        <div>
            <div>
                <button onClick={()=>dispatch(increment())}> count me </button>
                <p> </p>
            </div>{count}
            <div>
                <button onClick={()=> dispatch(decrement())}> low me </button>
                {/* <button onClick={()=> dispatch(incrementByAmount(2))}> amount</button>
                 */}
                 <button onClick={() => dispatch(incrementByAmount(2))}>Amount</button> {/* No change */}

            </div>
        </div>
    );
};

export default Counter;