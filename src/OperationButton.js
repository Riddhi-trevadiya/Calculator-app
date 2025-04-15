// eslint-disable-next-line no-unused-vars
import { ACTIONS } from "./App";
export default function OperationButton({ dispatch, operation }) {
    return (
        <button
            onClick={() =>
                dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })
            }
        >
            {operation}
        </button>
    );
}