
// eslint-disable-next-line no-unused-vars
import { ACTIONS } from "./App";
export default function DigitButton({ dispatch, digit }) {
    return (
        <button
        onClick={() => dispatch({ type:ACTIONS.ADD_DIGIT, payload: { digit } })}
        >
        {digit}
        </button>
    );
    }