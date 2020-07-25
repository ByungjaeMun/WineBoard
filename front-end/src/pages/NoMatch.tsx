import * as React from 'react'

interface Props {
}

interface State {
}

export default class NoMatch extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <>
        Not found!
      </>
    )
  }
}