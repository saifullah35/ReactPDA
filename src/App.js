import ProfileCard from "./ProfileCard";
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';


function App() {
    return(
        <div>
            <div>Personal Digital Assistants</div>

            {/* Attribute names can be anything user prefers */}
            <ProfileCard title= "Alexa" handle = "@alexa99" image={AlexaImage} />
            <ProfileCard title= "Cortana" handle= "@coratana32" image={CortanaImage} />
            <ProfileCard title= "Siri" handle= "@siri01" image={SiriImage} />
        </div>
    );
}

export default App;