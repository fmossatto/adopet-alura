import styles from './ActionPrimaryButton.module.css';

const ActionPrimaryButton = ({ display }) => {
    return (
        <button type="submit" className={styles.button}>
            {display}
        </button>
    );
};

export default ActionPrimaryButton;
