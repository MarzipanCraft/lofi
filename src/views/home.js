import React, { Component } from 'react';
import {Tab} from '../components/tabsheet'
import {Fretboard} from '../components/fretboard'


const tabsheet = [
    [1,2,3,4],
    [5,6,7,8]
]


class Home extends Component {

  render() {
    return (
      <div>
          <Fretboard/>
      </div>
    );
  }
}


export default Home;
