import React, { Component } from 'react'

export default class ClassC extends Component {
    constructor(props){
    super(props)
    this.state={
        name:'sri',
        occupation:'fisherman',
        age:'23',
        university:'SRM'

    }
}
  render() {
    return (
        <div>
        <header className='head'>
            <h2>HI THERE! {this.state.university}</h2>
            <h3>I AM {this.state.name}</h3>
            <h2>What is your father?{this.props.colour}</h2>
        </header>
        <section className='sect1'>
          <p>{this.state.occupation}</p>
          <p>{this.state.age}</p>
        </section>
    </div>
    )
  }
}
