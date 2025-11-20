
import RichTextEditor from './components/RichTextEditor'
import './styles/custom.css'

function App() {
  return (
    <>
      <div className="card">
        <RichTextEditor onChange={(content) => console.log(content)} />
      </div>
    </>
  )
}

export default App
