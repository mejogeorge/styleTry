import styles from './Button.module.css'

const InputBox = props => {
  return <div className={styles.button}>{props.text}</div>
}

export default InputBox
