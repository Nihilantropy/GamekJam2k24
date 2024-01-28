import Link from 'next/link';
import styles from '../styles/Rules.module.css'; // Assicurati che il percorso sia corretto

const RulesButton = () => {
    return (
        <Link href="/rules" passHref>
            <button className={styles.rulesButton}></button>
        </Link>
    );
};

export default RulesButton;

