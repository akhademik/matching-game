export const delay_this_function = (aFunction: (...args: unknown[]) => void, delayMs: number) => {
    let _timerId: number;
    return (...args: unknown[]) => {
        clearTimeout(_timerId);
        _timerId = setTimeout(() => aFunction(...args), delayMs);
    };
};
