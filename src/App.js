import {Switch, Route} from 'react-router-dom'
import About from './components/About'
import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'

import Home from './components/Home'
import NotFound from './components/NotFound'

const App = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <ProtectedRoute exact path="/about" component={About} />
    <ProtectedRoute exact path="/" component={Home} />
    <Route component={NotFound} />
  </Switch>
)

export default App
