import type { FC } from "react";
import styles from '../styles/hero.module.scss'
import Header from "./UI/header/header";

export const Hero: FC = () => {
    return (
        <div className={styles.hero}>
            <Header />
            <section>
                {/* TODO: add 3D animation */}
            </section>
            <section>
                <span>3D Planet System</span>
                <span>Start to use planet for your tasks.</span>
                <span>Get started</span>
            </section>
            <div style={{height: '1000vh'}}></div>
        </div>
    );
}