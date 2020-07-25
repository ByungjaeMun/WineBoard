import * as React from 'react'
import { Route, Switch } from 'react-router'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Main from '../pages/Main'
import NoMatch from '../pages/NoMatch'

interface Props {
}

interface State {
}

export default class App extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <>
        <Header/>
        <Switch>
          <Route path="/" exact={true} component={Main} />
          <Route component={NoMatch} />
        </Switch>
        <Footer/>
      </>
    )
  }
}
