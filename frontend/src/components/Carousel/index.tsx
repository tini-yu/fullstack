'use client';
import Image from 'next/image';
import styles from './Carousel.module.scss';

export default function Carousel() {
    return (
        <div className={styles.wrap}>
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className={styles.a}>
                            <div className={styles.ab}>
                                Электро-Бензо инструмент
                            </div>
                            <div className={styles.ac}>
                                большой выбор
                                и хорошие цены
                            </div>
                        </div>
                        <div className={styles.img}>
                            <Image fill src="/assets/images/promos/ChainsawPromo.png" alt="Chainsaw" />
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className={styles.Text}>
                            <div className={styles.TextTitle}>
                                FUBAG ГЕНЕРАТОРЫ
                            </div>
                            <div className={styles.TextDescription}>
                            FUBAG предлагает широкий набор опций для увеличения функциональности и мобильности генераторов
                            </div>
                        </div>
                        <div className={styles.img}>
                            <Image fill src="/assets/images/promos/FubagGeneratorsPromo.png" alt="Generator" />
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className={styles.Text}>
                            <div className={styles.TextTitle}>
                                Сильнее Снегопада
                            </div>
                            <div className={styles.TextDescription}>
                            Большой выбор снегоуборочных машин. Качественные устройства для любого бюджета
                            </div>
                        </div>
                        <div className={styles.img}>
                            <Image fill src="/assets/images/promos/SnowCleanersPromo.png" alt="SnowCleaner" />
                        </div>
                    </div>
                </div>
                <div className={styles.Buttons}>
                    <button className={styles.ButtonsInfo}>
                        Подробнее
                    </button>
                    <div className={styles.ButtonsArrows}>
                        <button className={styles.ButtonsArrowsButton} type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                            <Image src="/assets/icons/arrow-left.svg" alt="arrow" width={25} height={25} />
                        </button>
                        <button className={styles.ButtonsArrowsButton} type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                            <Image src="/assets/icons/arrow-right.svg" alt="arrow" width={25} height={25} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

//className="carousel-control-next"