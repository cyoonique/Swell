import React, { Component } from 'react';
import PropTypes from 'prop-types';

const classNames = require('classnames');

class ProtocolSelect extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const HTTPStyleClasses = classNames({
      composer_protocol_button: true,
      'composer_protocol_button-selected': this.props.currentProtocol === 'http://',
    });
    const HTTPSStyleClasses = classNames({
      composer_protocol_button: true,
      'composer_protocol_button-selected': this.props.currentProtocol === 'https://',
    });
    const WSStyleClasses = classNames({
      composer_protocol_button: true,
      'composer_protocol_button-selected': this.props.currentProtocol === 'ws://',
    });
    // const GQLtyleClasses = classNames({
    //   composer_protocol_button: true,
    //   'composer_protocol_button-selected': this.props.currentProtocol === 'http://',
    // });

    return (
      <div className="composer_protocol_container">
        <div
          role="button"
          tabIndex={0}
          className={HTTPStyleClasses}
          onMouseDown={() => this.props.onChangeHandler({ target: { value: 'http://' } }, 'protocol')
          }
        >
          HTTP
        </div>
        <div
          role="button"
          tabIndex={0}
          className={HTTPSStyleClasses}
          onMouseDown={() => this.props.onChangeHandler({ target: { value: 'https://' } }, 'protocol')
          }
        >
          HTTPS
        </div>
        <div
          role="button"
          tabIndex={0}
          className={WSStyleClasses}
          onMouseDown={() => this.props.onChangeHandler({ target: { value: 'ws://' } }, 'protocol')}
        >
          WS
        </div>
        {/* <div
          role="button"
          tabIndex={0}
          className={GQLStyleClasses}
          onMouseDown={() => this.props.onChangeHandler({ target: { value: 'http://' } }, 'protocol')
          }
        >
          GRAPHQL
        </div> */}
      </div>
    );
  }
}

ProtocolSelect.propTypes = {
  currentProtocol: PropTypes.string.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
};

export default ProtocolSelect;
