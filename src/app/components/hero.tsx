import type { FC } from "react";
import styles from '../styles/hero.module.scss'

export const Hero: FC = () => {
    return (
        <div className={styles.hero}>
            <section className={styles.hero__nav}>
                <span>Solar System Tasks</span>
                <span className={styles.hero__nav__button}>Начать</span>
            </section>
            <section>
                {/* TODO: add 3D animation */}
            </section>
            <section>
                <span>3D Planet System</span>
                <span>Start to use planet for your tasks.</span>
                <span>Get started</span>
            </section>
        </div>
    );
}