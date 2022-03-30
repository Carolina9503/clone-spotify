import React from "react";
import styles from "./Footer.module.scss";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import RepeatIcon from "@material-ui/icons/Repeat";
import { Slider, Grid } from "@material-ui/core";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__left}>
        <img
          src="https://i.scdn.co/image/ab67616d00004851e6f407c7f3a0ec98845e4431"
          alt="covers"
        />
        <div>
          <h4>Off My Face</h4>
          <p>Justin Bieber</p>
        </div>
      </div>
      <div className={styles.footer__center}>
        <ShuffleIcon className={styles.shuffle} />
        <SkipPreviousIcon className={styles.icon} />
        <PlayCircleOutlineIcon className={styles.icon} />
        <SkipNextIcon className={styles.icon} />
        <RepeatIcon className={styles.repeat} />
      </div>
      <div className={styles.footer__right}>
        <Grid container spacing={3} className={styles.grid_footer}>
          <Grid item>
            <PlaylistPlayIcon className={styles.icon} />
          </Grid>
          <Grid item>
            <VolumeDownIcon className={styles.icon} />
          </Grid>
          <Grid item xs>
            <Slider className={styles.MuiSlider_root} />
          </Grid>
        </Grid>
        <div></div>
      </div>
    </div>
  );
};

export default Footer;
