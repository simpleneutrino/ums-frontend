'use strict';

import React, {Component} from 'react';
import Modal from 'react-bootstrap/lib/Modal';

import TimePeriodId from './../containers/timePeriodId';

export default class SettingsModal extends Component {
  constructor(props) {
    super(props);
    this.state = {isModalOpen: false};
  }

  openModal = () => {
    console.log('open_model');
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    return (
      <Modal show={this.state.isModalOpen} onHide={this.closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Налаштування</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <TimePeriodId/>
        </Modal.Body>
      </Modal>
    );
  }
}