import React, { Component } from "react";

class LandingClouds extends Component {
  render() {
    return (
      <div className="clouds-svg">
        <svg className="background" xmlnsXlink="http://www.w3.org/2000/svg">
          <filter id="filter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.003"
              numOctaves="5"
            />
            <feColorMatrix
              values="1 -1 0 0 0
                               1 -1 0 0 0
                               1 0 0 0 0
                               -1 0 0 0 1"
            />
            <feComponentTransfer>
              <feFuncR
                type="table"
                tableValues="0 .02 .03 .03 .09 .12 .27 .91 .3 .03 0 0"
              />
              <feFuncG
                type="table"
                tableValues=".01 .09 .16 .18 .38 .48 .54 .73 .33 .09 .01 .01"
              />
              <feFuncB
                type="table"
                tableValues=".03 .17 .3 .25 .37 .42 .42 .6 .17 .01 0 0"
              />
            </feComponentTransfer>
          </filter>
          <rect width="100%" height="100%" filter="url(#filter)" />
          <foreignObject x="800" y="200" width="200" height="150">
            <div className="cloud-svg-landing">
              <a href="/sign-in" className="cloud-svg-landing__sign-in">
                Sign In
              </a>
              <a href="/register" className="cloud-svg-landing__register">
                Register
              </a>
              <a href="/shop" className="cloud-svg-landing__shop-as-guest">
                Shop as Guest
              </a>
            </div>
          </foreignObject>
        </svg>
      </div>
    );
  }
}

export default LandingClouds;
