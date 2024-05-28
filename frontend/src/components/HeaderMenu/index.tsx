'use client';

import Link from 'next/link';
import Image from 'next/image';

import styles from './HeaderMenu.module.scss';

export default function HeaderMenu() {
    return (
        <header>
            <div className={styles.back}>
                <div className={styles.wrapper}>
                    <div className={styles.navList}>
                        <Link href='/' className={styles.navListInfo}>
                            Доставка и оплата
                        </Link>
                        <Link href='/' className={styles.navListInfo}>
                            Контакты
                        </Link>
                    </div>
                    <div className={styles.middle}>
                        <div className={styles.middleplacegray}>Построй и обустрой</div>
                        <div className={styles.logo}>
                            <Image fill src="/assets/icons/dots.svg" alt="logo" />
                        </div>
                        <div className={styles.middleplaceblack}>Всё для дома, дачи и стройки!</div>
                    </div>
                    <div className={styles.icon}>
                        <Link href="/" className={styles.iconpic}>
                            <Image fill src="/assets/icons/bar-chart.svg" alt="compare" />
                        </Link>
                        <Link href="/" className={styles.iconpic}>
                            <Image fill src="/assets/icons/heart-line.svg" alt="favorite" />
                        </Link>
                        <Link href="/" className={styles.iconpic}>
                            <Image fill src="/assets/icons/shopping-cart.svg" alt="cart" />
                        </Link>
                    </div>
                </div>
            </div>
            <div className={styles.midwrap}>
                <div className={styles.mainlogo}>
                    <Image fill src="/assets/icons/5kvt-logo.svg" alt="logo" />
                </div>
                <div className={styles.phoneText}>
                    +7 (499) 719-99-94
                </div>
                <div className={styles.searchContainer}>
                    <input className={styles.input} type="text" placeholder="Что ищем?.." name="search" />
                    <button className={styles.searchContainerButton} type='submit'>
                        Поиск
                    </button>
                </div>
                <div className={styles.socialwrap}>
                    <Link href="/" className={styles.socialwrapicon}>
                        <Image fill src="/assets/icons/instagram.svg" alt="logo" />
                    </Link>
                    <Link href="/" className={styles.socialwrapicon}>
                        <Image fill src="/assets/icons/vkontakte.svg" alt="logo" />
                    </Link>
                    <Link href="/" className={styles.socialwrapicon}>
                        <Image fill src="/assets/icons/facebook.svg" alt="logo" />
                    </Link>
                    <Link href="/" className={styles.socialwrapicon}>
                        <Image fill src="/assets/icons/youtube.svg" alt="logo" />
                    </Link>
                </div>
                <button className={styles.orangeButton} type='submit'>
                        Адреса магазинов
                </button>
                <Link href="/" className={styles.cabinet}>
                        <Image fill src="/assets/icons/cabinet-icon.svg" alt="logo" />
                </Link>
            </div>
            <div className={styles.category}>
                <button className={styles.categoryButton} type='submit'>
                    <div className={styles.categoryButtonMenu}>
                        <Image fill src="/assets/icons/menu-line.svg" alt="logo" />
                    </div>
                    <div className={styles.categoryButtonText}>
                        Каталог
                    </div>
                </button>
                <div className={styles.categoryScroll}>
                    <Link href='/' className={styles.categoryScrollBox}>
                        Аккумляторы
                    </Link>
                    <Link href='/' className={styles.categoryScrollBox}>
                        Блоки контроля
                    </Link>
                    <Link href='/' className={styles.categoryScrollBox}>
                        Генераторы
                    </Link>
                    <Link href='/' className={styles.categoryScrollBox}>
                        Климатическая техника
                    </Link>
                    <Link href='/' className={styles.categoryScrollBox}>
                        Отопление
                    </Link>
                    <Link href='/' className={styles.categoryScrollBox}>
                        Перфораторы
                    </Link>
                    <Link href='/' className={styles.categoryScrollBox}>
                        Провода
                    </Link>
                    <Link href='/' className={styles.categoryScrollBox}>
                        Люстры
                    </Link>
                </div>
            </div>
        </header>
    );
}
