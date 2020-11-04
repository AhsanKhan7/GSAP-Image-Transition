import React, { useRef, useEffect } from "react";
import imag from "./Assets/imag.jpg";
import CSSRulePlugin from "gsap/CSSRulePlugin";
import { TimelineLite, Power2 } from "gsap/all";
import "./App.scss";

function App() {
  let container = useRef(null);
  let image = useRef(null);
  let imageReveal = CSSRulePlugin.getRule(".img-container:after");

  let tl = new TimelineLite();

  useEffect(() => {
    tl.to(container, 1, { css: { visibility: "visible" } })
      .to(imageReveal, 1.4, { width: "0%", ease: Power2.easeInOut })
      .from(image, 1.6, { scale: 1.6, ease: Power2.easeInOut, delay: -1.6 });
  }, []);

  return (
    <section className="main">
      <p>Image reveal</p>
      <div ref={(el) => (container = el)} className="container">
        <>
          <div className="img-container">
            <img ref={(el) => (image = el)} src={imag} />
          </div>
        </>
      </div>
    </section>
  );
}

export default App;
