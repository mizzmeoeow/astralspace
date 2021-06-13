import React, { Component } from "react";
import ProfileSpace from "../../components/body/space/profileSpace";
import ProfileFooter from "../footer/profileFooter";
import ProfileNavbar from "../headernavbar/profileNavbar";
import Hero from "../Hero/hero";
// import ReactTypingEffect from "react-typing-effect";
import TypingEffect from "new-react-typing-effect";

class Profile extends Component {
  render() {
    return (
      <div className="profile-page header">
        <div>
          {/* <ReactTypingEffect
            className="typingeffect"
            text={[
              "Welcome, you have arrived to AstralServers.",
              "You have a few decisions to make today, as always.",
              "Please, leave everything the way you found it.",
            ]}
            speed={150}
            eraseDelay={700}
          /> */}
          <TypingEffect
            messages={[
              "Welcome, you have arrived to AstralServers.",
              "You have a few decisions to make today, as always.",
              "Please, check to make sure you have not left anything upon exiting.",
              "Have a great stay. (^-^)/",
            ]}
            cursor="|"
            textRenderer={(text, renderedCursor, atIndex) => {
              return atIndex % 1 === 0 ? (
                <p className="sign-in-page profile" style={{ color: "white" }}>
                  {text}
                  {renderedCursor}
                </p>
              ) : (
                ""
              );
            }}
            cursorRenderer={(cursor) => (
              <span style={{ color: "white" }}>{cursor}</span>
            )}
            options={{
              text: {
                charactersPerSecond: 10,
                fullTextDelayMS: 5000,
              },
            }}
          />
        </div>
        <ProfileNavbar />
        <ProfileSpace />
        <Hero />
        <ProfileFooter />
      </div>
    );
  }
}

export default Profile;
