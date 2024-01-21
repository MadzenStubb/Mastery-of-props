import React from "react";
import Testimony from "./Components/Testimony";
import "./App.css";
import annoyedCat from "./Images/Annoyed cat.jpg";
import murphBag from "./Images/Murph trans.jpg";
import stubbyCat from "./Images/polite cat smile 1.jpg";
import cementMixer from "./Images/mezcladora.png";
import redSus from "./Images/red sus.png";

const App = () => {
  return (
    <main className="App">
      <section className="main-container">
        <h1>Our Smartest Students so Far</h1>
        <Testimony
          image={annoyedCat}
          name="Annoyed Cat being annoyed"
          country="United States"
          role="Software Engineer"
          company="Spotify"
          testimony="Cat who easily gets annoyed. He is not afraid of calling you and idiot and making you a meme of how idiot you are"
        />
        <Testimony
          image={murphBag}
          name="Murph with a money bag"
          country="Canada"
          role="Bank Robber"
          company="Bank of Canada"
          testimony="Dog is also suspected of being a forklift operator. Report any suspicious activity to the police."
        />
        <Testimony
          image={stubbyCat}
          name="Stubb"
          country="Argentina"
          role="Public Offender"
          company="Discord"
          testimony="Cat who is always looking for bitches. He has a rap sheet longer than his tail and is known for his mischievous antics. Don't let his innocent face fool you, he's a master of Public Offensive Memes."
        />
        <Testimony
          image={cementMixer}
          name="Cement Mixer"
          country="Unknown"
          role="Human Eater"
          company="Unknown"
          testimony="This cement mixer has a voracious appetite for humans. It devours them with its spinning blades and leaves no trace behind. Approach with extreme caution!"
        />
        <Testimony
          image={redSus}
          name="Red Sus"
          country="The Skeld"
          role="Sussy baka"
          company="Unknown"
          testimony="Red sus is always sus, if you see him near Elec or a Vent, report him as sussy behaviour"
        />
      </section>
    </main>
  );
};

export default App;
