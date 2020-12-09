import React, { Component } from 'react';
import './styles/Peers.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDotCircle } from '@fortawesome/free-solid-svg-icons'

class Peers extends Component {

  render() {
    let seeders = this.props.peers.reverse().map(peer => <li class='Peers-child' key={peer.key}><FontAwesomeIcon className='Peers-fa' icon={faDotCircle} />
      {peer.active.substr(0, peer.active.search('/'))}</li>);
    return (
      <ul class='Peers col-2 scroll'>
        <h3 className='mt-3'>Peers</h3>
        {seeders}
      </ul>
    );
  }
}

export default Peers;
