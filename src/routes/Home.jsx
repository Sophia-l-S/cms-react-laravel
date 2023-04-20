import Education from "../components/Education";
import Social from "../components/Socials";
import Entry from "../components/Entries";
import Project from "../components/Projects";

export default function Home() {
    return (
        <main id="main">
            {/* <h1>Sophia's Portfolio</h1> */}
            <hr></hr>
            <h2 id="title">
                About
            </h2>
            <hr></hr>
            <div id="list">
            <p>Welcome to my Portfolio</p>
            <p>My name is Sophia Scott</p>
            <p>I am a web developer with a background in computer systems and computer networking</p>
            </div>
            {/* <div name="Education"> */}
            <Education name="#Education"/>
            {/* </div> */}
            <Project/>
            <div name="#Social">
            <Social/>
            </div>

        </main>
    );
}