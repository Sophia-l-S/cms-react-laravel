import { useState, useEffect } from "react";

export default function Trivia() {
    const [category, setCategory] = useState("");
    const [qusetion, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [revealed, setRevealed] = useState(false);


    useEffect(() => {
        const getQuest = async () => {
            let response = await fetch(
                "https://opentdb.com/api.php?amount=1&type=boolean",
                {
                    method: "get"
                }
            );
            let data = await response.json();
            // console.log(data);
            setCategory(data.results[0].category);
            setQuestion(data.results[0].question);
            setAnswer(data.results[0].correct_answer);

        }
        getQuest();
    }, []);

    function reveal() {
        setRevealed(true);
    }

    let source = "";
    if (revealed) {
        source = <div>
            {answer}
        </div>
    } else {
        source = "";
    }

    return (
        <div>
            <h2>
                {/* todays random fact */}
            </h2>
            <div>{category}</div>
            <h3>{qusetion}</h3>
            {/* <div>{answer}</div> */}
            {source}
            <button onClick={reveal} type="button">Reveal Answer</button>

        </div>
    );
}