import { Button } from './companents/Button'
import './companents/Tesk1Range/Iterators'
import { ToastContainer } from './companents/ToastContainer'
import { toast } from './Observer'


function App() {

  return (
    <>
    <div className="flex flex-col items-center space-y-10">
    <h1 className="text-7xl font-bold text-center">Hello, World</h1>

    <div className="space-x-2">
      <Button onClick={() => {toast('Default masseg')}}>Default</Button>
      <Button onClick={() => {toast.success('Success masseg')}}>Success ✅</Button>
      <Button onClick={() => {toast.error('Error masseg')}}>Error ❌</Button>
      <Button onClick={() => toast.dismissAll()}>Dismiss All Toasts</Button>
    </div>

    <ToastContainer />
  </div>
  </>
  )
}

export default App
