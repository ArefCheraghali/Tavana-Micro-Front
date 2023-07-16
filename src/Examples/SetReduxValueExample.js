import React from "react";
import { Button } from "primereact/button"
import { useAppDispatch } from "../Hooks/useReduxHook";
import { setToken } from "../Features/user/user-slice";

const SetReduxValueExample = () => {
	const dispatch = useAppDispatch();
    return (
        <>
            <Button onClick={() => {
                dispatch(setToken("test"))
            }}>
                set token
            </Button>
        </>
    )
}

export default SetReduxValueExample;