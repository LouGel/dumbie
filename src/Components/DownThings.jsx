import discord from "../Images/discord.png";
import ig from "../Images/ig.png";
import fb from "../Images/fb.png";
import os from "../Images/os.png";
import yt from "../Images/yt.png";
import twitter from "../Images/twitter.png";
export const DownThings = () => {
  return (
    <div className="downThings">
      <div>
        <div className="divInDown">
          <p className="charte">Join The Movement !</p>
        </div>
        <div className="divInDown">
          <img src={discord} />
          <img src={twitter} />
          <img src={ig} />
          <img src={fb} />
          <img src={os} />
          <img src={yt} />
        </div>
        <div className="divInDown">
          <p className="Copyright">
            Copyright © 2022 Galactic Dumbies - terms and conditions - legal
            notice
          </p>
        </div>
      </div>
    </div>
  );
};
