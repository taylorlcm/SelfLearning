export const increment = () => {
    return{
        type: 'INCREMENT'
    };
};

export const decrement = () => {
    return{
        type: 'DECREMENT'
    };
};

export const incrementFive = (num) => {
    return{
        type: 'incrementFive',
        payload: num
    };
};

