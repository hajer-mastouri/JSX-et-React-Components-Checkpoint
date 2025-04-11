import React from "react";
import product from "./Product";
import Name from "./Name";
import Price from "./Price";
import Description from "./Description";
import Image from "./Image";
import { Card } from "react-bootstrap";

const App = () => {
    const firstName = ""; // Change to your name to see the effect

    return (
        <div className="container mt-5">
            <Card className="p-3 text-center">
                <Image image={product.image} />
                <Name name={product.name} />
                <Price price={product.price} />
                <Description description={product.description} />
            </Card>
            <p className="mt-3">
                {firstName ? `Hello, ${firstName}! `: "Hello, there!"}
            </p>
        </div>
    );
};

export default App;