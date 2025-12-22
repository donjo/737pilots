import { define } from "../utils.ts";
import JoinButton from "../islands/JoinButton.tsx";
import PilotCounter from "../islands/PilotCounter.tsx";

export default define.page(function Home() {
  return (
    <>
      <div class="sky-card">
        <span class="cloud-accent cloud-1">☁</span>
        <span class="cloud-accent cloud-2">☁</span>

        <header>
          <h1 class="logo">
            <span class="plane-icon">✈</span>PilotPals
          </h1>
          <p class="tagline">"Know Your Co-Pilot Before You Fly Together"</p>
          <div class="divider-line"></div>
        </header>

        <div class="content">
          <div class="intro">
            <p>
              Flying a 737 is all about <span class="highlight">teamwork</span>. But how well do you
              really know the person sitting next to you in the cockpit?
            </p>
            <p>
              PilotPals helps 737 pilots <span class="highlight">connect before they fly</span>.
              Build genuine friendships, discover shared interests, and create the kind of
              camaraderie that makes every flight smoother.
            </p>
            <p>
              Because the best cockpit crews aren't just colleagues—they're <span class="highlight">pals</span>.
            </p>
          </div>

          <div class="features">
            <h2>What You'll Get</h2>
            <ul class="feature-list">
              <li>See who you're flying with before your shift</li>
              <li>Chat & get to know your crew ahead of time</li>
              <li>Share fun facts, hobbies & ice-breakers</li>
              <li>Build lasting friendships at 35,000 feet</li>
              <li>Join pilot meetups in your hub city</li>
              <li>Practice conversations & break the awkwardness</li>
            </ul>
          </div>
        </div>

        <div class="cta-section">
          <JoinButton />
          <PilotCounter initialCount={2000} />
        </div>
      </div>

      <footer>
        Made with ❤ for pilots who believe the best flights start with friendship
      </footer>
    </>
  );
});
