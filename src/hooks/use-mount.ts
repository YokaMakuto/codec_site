import { useEffect, useRef } from 'react';

export const useMount = (fn: React.EffectCallback) => {
    const hasRunRef = useRef(false);
    const fnRef = useRef(fn);
    fnRef.current = fn;

    useEffect(() => {
        if (hasRunRef.current) {
            return;
        }

        const cleanup = fnRef.current();
        hasRunRef.current = true;
        return cleanup;
    }, []);
};
