'use client';

import Link from 'next/link';
import Image from 'next/image';

import styles from './Footer.module.scss';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.over}>

            
            <div className={styles.wrapper}>
                <div className={styles.left}>
                    <Link href="/" className={styles.logo}>
                        <Image fill src="/assets/icons/5kvt-logo.svg" alt="logo" />
                    </Link>
                    <div className={styles.first}>
                        <span className={styles.firstWhite}>+7 (499) 719-99-94</span>
                        <span className={styles.firstWhite}>info@5kvt.ru</span>
                        <span className={styles.firstWhite}>Ежедневно 9:30 - 20:00 (МСК)</span>
                        <span className={styles.firstGray}>
                            117218, г. Москва, пр-кт Нахимовский, дом 30/43, кв. 81
                        </span>
                    </div>
                </div>
                <div className={styles.info}>
                    <span className={styles.infoTitle}>Информация</span>
                    <span className={styles.infoText}>Доставка</span>
                    <span className={styles.infoText}>Оплата</span>
                    <span className={styles.infoText}>Производители</span>
                    <span className={styles.infoText}>Подарочные сертификаты</span>
                    <span className={styles.infoText}>Партнерская программа</span>
                    <span className={styles.infoText}>Акции</span>
                    <span className={styles.infoText}>Все товары</span>
                </div>
                <div className={styles.info}>
                    <span className={styles.infoTitle}>Служба поддержки</span>
                    <span className={styles.infoText}>Возврат товара <br/></span>
                    <div className={styles.infoEmpty}></div>
                    <span className={styles.infoTitle}>Личный кабинет</span>
                    <span className={styles.infoText}>Личный кабинет</span>
                    <span className={styles.infoText}>История заказов</span>
                    <span className={styles.infoText}>Избранное</span>
                    <span className={styles.infoText}>Рассылка</span>
                </div>
                <div className={styles.forth}>
                    <div className={styles.socials}>
                        <div className={styles.socialsPair}>
                            <div className={styles.socialsPairImage}>
                                <Image fill src="/assets/icons/whatsapp.svg" alt="whatsapp" />
                            </div>
                            <div className={styles.socialsPairImage}>
                                <Image fill src="/assets/icons/viber.svg" alt="viber" />
                            </div>
                        </div>
                        <span className={styles.socialsText}>Напишите нам</span>
                    </div>
                    <button className={styles.button}>
                        <div className={styles.buttonIcon}>
                            <Image fill src="/assets/icons/support.svg" alt="user" />
                        </div>
                        <span className={styles.buttonText}>
                            Служба поддержки
                        </span>
                    </button>
                    <span className={styles.forthText}>Принимаем к оплате</span>
                    <div className={styles.cards}>
                        <div className={styles.cardsImage}>
                            <Image fill src="/assets/icons/mastercard.svg" alt="card" />
                        </div>
                        <div className={styles.cardsImage}>
                            <Image fill src="/assets/icons/maestro.svg" alt="card" />
                        </div>
                        <div className={styles.cardsImage}>
                            <Image fill src="/assets/icons/visa.svg" alt="card" />
                        </div>
                        <div className={styles.cardsImage}>
                            <Image fill src="/assets/icons/mir.svg" alt="card" />
                        </div>
                    </div>
                </div>
            </div>
            <span className={styles.small}>
                Все права защищены. Указанная стоимость товаров и условия их приобретения действительны на текущую дату.
            </span>
            </div>
        </footer>
    );
}