import React, { Component } from 'react'
import { connect } from 'react-redux'

const presenter = (
  mapStateToProps = () => {
    return {}
  },
  mapDispatchToProps = {}
) => (Presenter, ViewComp) => {
  if (Presenter && ViewComp) {
    class WrappedView extends Component {
      constructor(props) {
        super(props)
        this.pm = new Presenter(props, this)
      }
      shouldComponentUpdate(nextProps, nextState) {
        if (this.pm.shouldComponentUpdate) {
          return this.pm.shouldComponentUpdate(nextProps, nextState)
        }
        return true
      }

      componentDidMount(prevProps, prevState, snapshot) {
        this.pm.componentDidMount &&
          this.pm.componentDidMount(prevProps, prevState, snapshot)
      }

      componentWillUnmount() {
        this.pm.componentWillUnmount && this.pm.componentWillUnmount()
      }

      render() {
        return <ViewComp {...this.props} pm={this.pm} />
      }
    }
    return connect(
      mapStateToProps,
      mapDispatchToProps
    )(WrappedView)
  }
  return ViewComp
}
export default presenter
