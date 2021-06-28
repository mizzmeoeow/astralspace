import React, { Component } from "react";
import ProfileSpace from "../body/space/profileSpace";
import ProfileFooter from "../footer/profileFooter";
import ProfileNavbar from "../headernavbar/profileNavbar";
import Hero from "../Hero/hero";
import TypingEffect from "new-react-typing-effect";
import ProfileAuth from "../auth/profileauth/profileauth";

class Dashboard extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="profile-page header">
        <div>
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
        <ProfileAuth />
        <Hero />
        <h1>Status: {this.props.loggedInStatus}</h1>
        <ProfileFooter />
      </div>
    );
  }
}

export default Dashboard;
