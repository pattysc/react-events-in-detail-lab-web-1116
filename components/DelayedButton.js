const React = require('react');

class DelayedButton extends React.Component{
  constructor(){
    super()

    this.clickingthing = this.clickingthing.bind(this)
  }

  clickingthing(event){
    event.persist()
    var s = this
    // setTimeout(s.props.onDelayedClick(event), s.props.delay)
    setTimeout(function(){s.props.onDelayedClick(event)}, s.props.delay)
  }

  render(){
    return(
      <button onClick={this.clickingthing}/>
    )
  }
}

module.exports = DelayedButton
