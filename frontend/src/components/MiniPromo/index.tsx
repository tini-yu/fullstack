'use client';

import Link from 'next/link';
import Image from 'next/image';

import styles from './MiniPromo.module.scss';

export default function MiniPromo() {
    return (
        <div className={styles.card}>
            <div className={styles.cardInfo}>
                <span className={styles.cardInfoText}>
                    Стабилизаторы<br/>и Источники бесперебойного питания энергии
                </span>
                <div className={styles.cardInfoImage}>
                    <Image fill src="/assets/icons/white-line.svg" alt="line" />
                </div>
                <button className={styles.cardInfoButton}>
                    Перейти в каталог
                </button>
            </div>

        </div>
        

    );
}