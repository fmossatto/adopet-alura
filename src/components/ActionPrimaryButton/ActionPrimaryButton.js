import styles from './ActionPrimaryButton.module.css';

const ActionPrimaryButton = ({ display }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        window.location.href = '/available';
    };

    return (
        <button className={styles.button} onClick={handleSubmit}>
            {display}
        </button>
    );
};

export default ActionPrimaryButton;
