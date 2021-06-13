import React from "react";
import Card from "../UI/Card/card";

/**
 * @author
 * @function Hero
 */

const Hero = (props) => {
  return (
    <div>
      <Card>
        Blog
        <button className="blog-btn" onClick={() => setShow(true)}>
          Post Log
        </button>
      </Card>
    </div>
  );
};

export default Hero;
