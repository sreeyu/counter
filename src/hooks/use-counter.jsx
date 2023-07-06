import { useState, useEffect } from "react";

const useCounter = (count = true) =>{

    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if(count){
                setCounter((prevCounter) => prevCounter + 1)
            }
            else{
                setCounter((prevCounter) => prevCounter - 1)
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [count]);

    return counter;
};

export default useCounter;