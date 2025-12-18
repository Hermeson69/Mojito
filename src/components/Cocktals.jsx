import gsap from "gsap";
import { cocktailLists, mockTailLists } from "../../constants";
import { useGSAP } from "@gsap/react";

const Cocktals = () => {
    useGSAP(()=>{
        const paralaxTimile = gsap.timeline({
            scrollTrigger:{
                trigger: "#coocktals",
                start:"top 30%",
                end: "bottom  80%",
                scrub: true,
            }
        })
        paralaxTimile.from("#c-left-leaf", {x: -100, y: 100})
        .from("#c-right-leaf", {x: 100, y: 100})
    })
  return (
    <section id="cocktails" className="noisy">
      <img id="c-left-leaf" src="/images/cocktail-left-leaf.png" alt="l-leaf" />

      <img
        id="c-right-leaf"
        src="/images/cocktail-right-leaf.png"
        alt="r-leaf"
      />

      <div className="list">
        <div className="popular">
          <h2>Most Popular Cocktals:</h2>
          <ul>
            {cocktailLists.map(({ name, country, detail, price }) => (
              <li key={name}>
                <div className="md:me-28">
                  <h3>{name}</h3>
                  <p>
                    {country} | {detail}
                  </p>
                </div>
                <span>- {price}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="loved">
          <h2>Most loved Cocktals:</h2>
          <ul>
            {mockTailLists.map(({ name, country, detail, price }) => (
              <li key={name}>
                <div className="md:me-28">
                  <h3>{name}</h3>
                  <p>
                    {country} | {detail}
                  </p>
                </div>
                <span>- {price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Cocktals;
