import './styles.css'

const InputBox = props => {
  return (
    <div className={`inputBox`}>
      <input className={`box ${props.dropDown ? 'extraPadding' :''} `} type='text' placeholder={props.placeholder} />
      {props.dropDown && <div className='drop'>▼</div>}
    </div>
  )
}

export default InputBox
