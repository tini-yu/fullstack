'use client';
import Image from 'next/image';
import styles from './TopCategory.module.scss';
import CatalogCard from '../CatalogCard';

export default function ItemList() {
    return (
        <div className={styles.arp}>

            <div className={styles.wrapper}>
                <div id="carouselTop" className="carousel slide">
                    <div className={styles.catalog}>
                        <div className={styles.catalogTop}>
                            <span className={styles.catalogTopTitle}>Товары месяца</span>
                            <div className={styles.catalogTopArrows}>
                                <button className={styles.catalogTopArrowsButton} type="button" data-bs-target="#carouselTop" data-bs-slide="prev">
                                    <Image src="/assets/icons/arrow-left.svg" alt="arrow" width={25} height={25} />
                                </button>
                                <button className={styles.catalogTopArrowsButton} type="button" data-bs-target="#carouselTop" data-bs-slide="next">
                                    <Image src="/assets/icons/arrow-right.svg" alt="arrow" width={25} height={25} />
                                </button>
                            </div>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className={styles.catalogBottom}>
                                    <CatalogCard />
                                    <CatalogCard />
                                    <CatalogCard />
                                    <div className={styles.hid}>
                                        <CatalogCard />
                                    </div>
                                </div>
                            </div>
                                
                            <div className="carousel-item">
                                <div className={styles.catalogBottom}>
                                    <CatalogCard />
                                    <CatalogCard />
                                    <CatalogCard />
                                    <div className={styles.hid}>
                                        <CatalogCard />
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className={styles.catalogBottom}>
                                    <CatalogCard />
                                    <CatalogCard />
                                </div>
                            </div>
                        </div>   
                    </div>
                </div>
            </div>
        </div>
    );
}