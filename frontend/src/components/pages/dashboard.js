import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

import ProfileSpace from "../body/space/profileSpace";
import ProfileFooter from "../footer/profileFooter";
import ProfileNavbar from "../headernavbar/profileNavbar";
import Hero from "../Hero/hero";
import TypingEffect from "new-react-typing-effect";

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: true,
      email: "",
      token: "",
    };

    this.updateUser = this.updateUser.bind(this);
  }

  updateUser() {
    this.setState({
      loggedIn: true,
    });
  }

  componentDidMount() {
    const config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };

    axios.get("loggedIn", config).then(
      (response) => {
        console.log(response);
        console.log(config);
        console.log(localStorage);
        console.log("Get user response: ");
        if (response.config.user) {
          console.log(
            "Get User: There is a user saved in the server session: "
          );
          this.setState({
            loggedIn: true,
            email: response.data.user.email,
            token: data,
            authToken: data,
          });
        }
      },
      (err) => {
        console.log(err);
        console.log("Get user: no user");
        this.setState({
          loggedIn: false,
          email: null,
        });
      }
    );
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
        <Hero />
        <ProfileFooter />
      </div>
    );
  }
}

export default Dashboard;
