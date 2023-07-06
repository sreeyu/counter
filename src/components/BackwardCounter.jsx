import React from "react";
import Card from "./Card";
import useCounter from "../hooks/use-counter";

function BackwardCounter(){

    const counter = useCounter(false);

    return(
        <Card>{counter}</Card>
    );
};

export default BackwardCounter;