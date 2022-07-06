import styles from './ActionPrimaryButton.module.css';

const ActionPrimaryButton = ({ display }) => {
    return <button className={styles.button}>{display}</button>;
};

export default ActionPrimaryButton;
