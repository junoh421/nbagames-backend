import React, { Component } from 'react'
import { connect } from 'react-redux'
import { AddFirstName, AddLastName, SearchPlayer, NoMatch } from '../actions/ApiActions'
import GameSearch from '../components/GameSearch'

class ApiContainer extends Component {
  render() {
    return (
      <GameSearch
       handleFirstName={this.props.handleFirstName}
       handleLastName={this.props.handleLastName}
       handleSubmit={this.props.handleSubmit}
       error={this.props.error}
       playerinfo={this.props.playerinfo}
      />
    )
  }
}

const mapStoreToProps = store => {
  return {
    error: store.errorState,
    playerinfo: store.playerState
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleFirstName: (event) => {
      let firstname = event.target.value
      dispatch(AddFirstName(firstname))
    },
    handleLastName: (event) => {
      let lastname = event.target.value
      dispatch(AddLastName(lastname))
    },
    handleSubmit: (event) => {
      dispatch(SearchPlayer())
    }
  }
}

export default connect(mapStoreToProps, mapDispatchToProps)(ApiContainer);