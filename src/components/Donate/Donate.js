import React from 'react';
import { Modal, Button } from 'antd';

import PriceTable from '../pricing/Pricing';


export default class Donate extends React.Component {
  state = { visible: false }

  componentWillReceiveProps(nextProps) {
    if (this.props !== nextProps) {
      this.setState({
        visible: nextProps.show,
      });
    }
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = (e) => {
    // console.log(e);
    this.setState({
      visible: false,
    });
  }

  handleCancel = (e) => {
    // console.log(e);
    this.setState({
      visible: false,
    });
  }

  render() {
    return (
      <div>
        <Modal
          title="Give"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={null}
          width="500"
        >
          <PriceTable />
        </Modal>
      </div>
    );
  }
}

