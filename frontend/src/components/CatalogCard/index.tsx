import Image from 'next/image';
import { useState } from 'react';

import styles from './CatalogCard.module.scss';

{/* С бэкэнда через react queries брать названия, описания и вставлять */}
export default function CatalogCard() {

    return (
        <div className={styles.card}>
            <div className={styles.cardBackground}>
                <div className={styles.cardBackgroundImage}>
                    <Image fill src="/assets/images/products/product.png" alt="product" />
                </div>
                <button className={styles.cardBackgroundLike}>
                    <Image fill src="/assets/icons/blue-heart-line.svg" alt="heart" />
                </button>
            </div>
            <div className={styles.cardMiddle}>
                <div className={styles.cardMiddleText}>
                    <div className={styles.cardMiddleTextTitle}>
                        Название
                    </div>
                    <div className={styles.cardMiddleTextDesc}>
                        Описание описание не описание описание 
                    </div>
                </div>
                <div className={styles.cardMiddlePrice}>
                    <div className={styles.cardMiddlePriceNumber}>
                        <div className={styles.cardMiddlePriceNumberCurrent}>1200 ₽</div>
                        <div className={styles.cardMiddlePriceNumberCrossed}>1900</div>
                    </div>
                    <div className={styles.cardMiddlePriceCompare}>
                        <Image fill src="/assets/icons/blue-bar-chart.svg" alt="compare" />
                    </div>
                </div>
            </div>
            <button className={styles.cardButton}>
                <div className={styles.cardButtonIcon}>
                    <Image fill src="/assets/icons/white-shopping-cart.svg" alt="cart" />
                </div>
                <span className={styles.cardButtonText}>
                    В корзину
                </span>
            </button>
        </div>
    );
}

{/* <div className={styles.cardImage}>
    <Image
        fill
        src="/assets/images/pizzas/01.png"
        alt="pizza"
    />
</div>
<div className={styles.cardDesc}>
    <span className={styles.cardDescName}>Название</span>
    <span className={styles.cardDescText}>Описание</span>

    <span className={styles.cardDescPrice}>599 руб.</span>

    <button className={styles.cardDescBuyBtn}>Заказать</button>

</div> */}