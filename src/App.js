import ProfileCard from "./ProfileCard";

function App() {
    return(
        <div>
            <div>Personal Digital Assistants</div>

            {/* Attribute names can be anything user prefers */}
            <ProfileCard title= "Alexa" handle = "@alexa99" />
            <ProfileCard title= "Cortana" handle= "@coratana32" />
            <ProfileCard title= "Siri" handle= "@siri01" />
        </div>
    );
}

export default App;