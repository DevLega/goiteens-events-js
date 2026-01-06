import './App.css'
import events from './data/upcoming-events.json'
import PageBoard from './components/PageBoard'

function App() {
  return (
    <>
      <PageBoard events={events}/>
    </>
  )
}

export default App
