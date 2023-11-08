import { AppRoutes } from '../Routes/Routes'
import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'
import { Sidebar } from '../Sidebar/Sidebar'
import UserForm from '../User/UserForm'

const App = () => {
  return (
    <div className='app'>
      <Header />

      <UserForm />

      <div className='container'>
        <Sidebar />
        <AppRoutes />
      </div>
      <Footer />
    </div>
  )
}

export default App
