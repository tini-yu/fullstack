import Image from 'next/image';
import styles from './Advantages.module.scss';

export default function Advantages() {
    return (
        <div className={styles.wrapper}>
            <span className={styles.title}>Наши преимущества</span>
            <div className={styles.list}>
                <div className={styles.card}>
                    <div className={styles.cardImage}>
                        <Image fill src="/assets/icons/adv-delivery.svg" alt="delivery" />
                    </div>
                    <div className={styles.Text}>
                        <div className={styles.cardTitle}>
                            Удобная доставка 24/7
                        </div>
                        <div className={styles.cardDesc}>
                            Мы работаем с проверенными транспортными компаниями
                        </div>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.cardImage}>
                        <Image fill src="/assets/icons/adv-payment.svg" alt="payment" />
                    </div>
                    <div className={styles.Text}>
                        <div className={styles.cardTitle}>
                            Оплата любым способом
                        </div>
                        <div className={styles.cardDesc}>
                            7 способов оплаты для вашего удобства
                        </div>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.cardImage}>
                        <Image fill src="/assets/icons/adv-warranty.svg" alt="warranty" />
                    </div>
                    <div className={styles.Text}>
                        <div className={styles.cardTitle}>
                            Гарантия качества
                        </div>
                        <div className={styles.cardDesc}>
                            Перед покупкой мы надежно проверяем товар
                        </div>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.cardImage}>
                        <Image fill src="/assets/icons/adv-support.svg" alt="support" />
                    </div>
                    <div className={styles.Text}>
                        <div className={styles.cardTitle}>
                            Онлайн поддержка
                        </div>
                        <div className={styles.cardDesc}>
                            Менеджеры оперативно ответят на звонок или заявку
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}