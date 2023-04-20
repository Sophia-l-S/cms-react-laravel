import { useState, useEffect } from "react";

export default function UselessFact() {
    const [randomFact, setRandomFact] = useState("");
    const [factSource, setFactSource] = useState("");

    useEffect(() => {
        const getFact = async () => {
            let response = await fetch(
                "https://uselessfacts.jsph.pl/api/v2/facts/random",
                {
                    method: "get"
                }
            );
            let data = await response.json();
            console.log(data);
            setRandomFact(data.text);
            setFactSource(data.source_url);
        }
        getFact();
    }, []);

    let source = "";
    if (factSource) {
        source = `(Source: ${factSource})`;
    }

    return (
        <div>
            <h2>
                todays random fact
            </h2>
            <div>{randomFact}</div>
            <div>{factSource}</div>

        </div>
    );
}