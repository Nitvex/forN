import React, { Component } from 'react';
import './styles.scss';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import data from '../Text/text.json';
class Lines extends Component {

  getPercentHeight (paragraphs, index) {
    let maxHeight = this.props.cursor.maxPosition;
    let height = (paragraphs[index].height) / (maxHeight / 100) * 5;
    return height;
  }

  render () {
    const { cursor } = this.props;

    return <div className="lines-container">
        <div className="txt-container">
          <div className="txt-1">LSA</div>
          <div className="txt-2">Text Tilling</div>
          <div className="txt-3">ARTM</div>
        </div>
        <div className="lines">
          <div className="cursor" style={{ top: (cursor.position / (cursor.maxPosition / 100)) * 5 + 19.527 }} />
          {cursor.paragraphs.map((paragraph, i) => (
            <div
              key={i}
              className="block"
              style={{
                height: this.getPercentHeight(cursor.paragraphs, i),
                backgroundColor: "rgba" + data.colors.first[i]
              }}
            >
              <div className="black-line" />
            </div>
          ))}
        </div>
        <div className="lines">
          <div className="cursor" style={{ top: (cursor.position / (cursor.maxPosition / 100)) * 5 + 19.527 }} />
          {cursor.paragraphs.map((paragraph, i) => (
            <div
              key={i}
              className="block"
              style={{
                height: this.getPercentHeight(cursor.paragraphs, i),
                backgroundColor: "rgba" + data.colors.second[i]
              }}
            >
              <div className="black-line" />
            </div>
          ))}
        </div>
        <div className="lines">
          <div className="cursor" style={{ top: (cursor.position / (cursor.maxPosition / 100)) * 5 + 19.527 }} />
          {cursor.paragraphs.map((paragraph, i) => (
            <div
              key={i}
              className="block"
              style={{
                height: this.getPercentHeight(cursor.paragraphs, i),
                backgroundColor: "rgba" + data.colors.third[i]
              }}
            >
              <div className="black-line" />
            </div>
          ))}
        </div>
      </div>;
  }
}

Lines.propTypes = {
  cursor: PropTypes.object,
  maxPosition: PropTypes.integer
};

function mapStateToProps (state) {
  return {
    cursor: state.cursor
  };
}

export default connect(mapStateToProps)(Lines);
