import logo from './logo.svg'
import './App.css'
import InputBox from './Components/InputBox'
import Button from './Components/Button'

function App () {
  return (
    <div className='App'>
      <div className='formView'>
        <InputBox placeholder='Search Team' dropDown/>
        <InputBox placeholder='Search Members' dropDown/>
        <InputBox placeholder='Name' />
        <InputBox placeholder='Phone' />
        <InputBox placeholder='Email' />
        <InputBox placeholder='Remark' />
        <Button  text='submit'/>
      </div>
    </div>
  )
}

export default App
