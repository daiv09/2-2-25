import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function TypedText() {
  const typedElement = useRef(null);

  useEffect(() => {
    if (typedElement.current) {
      const options = {
        strings: [
          "My love for you is <i>Awesome</i>",
          "My love for you is <i>Great</i>",
          "My love for you is Ever-lasting",
        ],
        typeSpeed: 0,
        backSpeed: 0,
        smartBackspace: true,
        loop: true,
      };

      const typed = new Typed("#typed-text", options);

      return () => typed.destroy();
    }
  }, []);

  return <span id="typed-text" ref={typedElement}></span>;
}
