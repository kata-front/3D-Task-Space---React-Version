import { useRef } from "react";
import styles from "../styles/info.module.scss";
import useInfoAnimate from "../../utils/hooks/useInfoAnimate";
import { useNavigate } from "react-router";

const InfoSection = () => {
  const navigate = useNavigate();

  const aboutSpanRef = useRef<HTMLDivElement>(
    null,
  ) as React.RefObject<HTMLDivElement>;

  const listRef = useRef<HTMLOListElement>(
    null,
  ) as React.RefObject<HTMLOListElement>;

  const infoRef = useRef<HTMLDivElement>(
    null,
  ) as React.RefObject<HTMLDivElement>;

  const buttonRef = useRef<HTMLButtonElement>(
    null,
  ) as React.RefObject<HTMLButtonElement>;

  useInfoAnimate({ aboutSpanRef, listRef, infoRef, buttonRef });

  return (
    <div className={styles["info-section"]} ref={infoRef}>
      <span className={styles["info-section__title"]}>How it works</span>

      <div ref={aboutSpanRef} className={styles["info-section__about-this"]}>
        Every task becomes a planet. Its distance from the Sun reflects priority
        – the closer, the more urgent. Color shows status: green for completed,
        red for active. Watch your to‑do list come alive in a 3D solar system
        where productivity feels like exploring space.
      </div>
      <ol ref={listRef} className={styles["info-section__list"]}>
        <li>Create a task – give it a name, deadline, and priority.</li>
        <li>
          See it become a planet – it automatically takes its place in your
          solar system.
        </li>
        <li>
          Track progress – watch planets move, change color, and react to your
          updates.
        </li>
        <li>
          Stay in control – the overview of your universe helps you never miss
          an important deadline.
        </li>
      </ol>
      <button
        onClick={() => navigate('/infoTasks')}
        ref={buttonRef}
        className={styles["info-section__start-btn"]}
      >
        Get started!
      </button>
    </div>
  );
};

export default InfoSection;
