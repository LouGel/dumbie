import discord from "../Images/discord.png";
import ig from "../Images/ig.png";
import fb from "../Images/fb.png";
import os from "../Images/os.png";
import yt from "../Images/yt.png";
import twitter from "../Images/twitter.png";
import "./DownThings.css";

export const Footer = () => {
  return (
    <footer className="mt-10 p-4">
      <div>
        <div className="divInDown mb-10">
          <p className="charte">Join The Movement !</p>
        </div>
        <div className="divInDown">
          <a>
            <img className="linkLogo" src={yt} />
          </a>
          <a
            href={"https://www.instagram.com/galacticdumbies/"}
            target="_blank" rel="noreferrer"
          >
            <img className="linkLogo" src={ig} />
          </a>
          <a
            href={"https://www.facebook.com/Galactic-Dumbies-101332785921659/"}
            target="_blank" rel="noreferrer"
          >
            <img className="linkLogo" src={fb} />
          </a>
          <a href={"https://twitter.com/galacticdumbies/"} target="_blank" rel="noreferrer">
            <img className="linkLogo" src={twitter} />
          </a>
          <a href={"https://discord.com/invite/Q7cXrbKw7U"} target="_blank" rel="noreferrer">
            <img className="linkLogo" src={discord} />
          </a>
          <a>
            <img className="linkLogo" src={os} />
          </a>
        </div>
        <div className="divInDown mt-3">
          <p className="Copyright px-4 text-center text-xs">
            Copyright © 2022 Galactic Dumbies - terms and conditions - legal
            notice
          </p>
        </div>
      </div>
    </footer>
  );
};
