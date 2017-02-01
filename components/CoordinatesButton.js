const React = require('react');

class CoordinatesButton extends React.Component{
  constructor(){
    super()

    this.clickingthing = this.clickingthing.bind(this)
  }

  clickingthing(event){
    let x = event.clientX
    let y = event.clientY
    let array = [x, y]
    this.props.onReceiveCoordinates(array)
  }

  render(){
    return(
      <button onClick={this.clickingthing}/>
    )
  }
}

module.exports = CoordinatesButton
