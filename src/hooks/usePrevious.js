import { useRef, useEffect } from "react";

export default function usePrevious(val) {
    const prevVal = useRef();

    useEffect(() => {
        prevVal.current = val;
    }, [val]);

    return prevVal.current;
};