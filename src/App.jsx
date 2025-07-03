import Terminal from './components/Terminal'
import './App.css'

function App() {

  return (
    <>
      <div className="h-screen w-screen">
        <p className='bg-gray-900 text-fuchsia-300'>Welcome!</p>
        <p className='bg-gray-900 text-fuchsia-300'>Type 'help' to get started</p>
        <Terminal />
      </div>
    </>
  )
}

export default App
