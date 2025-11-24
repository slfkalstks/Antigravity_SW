import { useEffect, useRef } from 'react';

export const useGameLoop = (callback: (deltaTime: number) => void, isRunning: boolean) => {
    const requestRef = useRef<number | undefined>(undefined);
    const previousTimeRef = useRef<number | undefined>(undefined);
    const callbackRef = useRef(callback);

    useEffect(() => {
        callbackRef.current = callback;
    }, [callback]);

    const animate = (time: number) => {
        if (previousTimeRef.current !== undefined) {
            const deltaTime = time - previousTimeRef.current;
            callbackRef.current(deltaTime);
        }
        previousTimeRef.current = time;
        requestRef.current = requestAnimationFrame(animate);
    };

    useEffect(() => {
        if (isRunning) {
            requestRef.current = requestAnimationFrame(animate);
        } else {
            if (requestRef.current !== undefined) {
                cancelAnimationFrame(requestRef.current);
            }
            previousTimeRef.current = undefined;
        }

        return () => {
            if (requestRef.current !== undefined) {
                cancelAnimationFrame(requestRef.current);
            }
        };
    }, [isRunning]);
};
