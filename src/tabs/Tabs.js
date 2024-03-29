import PropTypes from 'prop-types';
import React, { Component } from 'react';

/**
 * The Tabs component renders a number of tabs and shows/hides the content of each tab based on the
 * user's selection.
 */
class Tabs extends Component {
  constructor(props) {
    super(props);

    this.select = this.select.bind(this);
  }

  static defaultProps = {
    selected: 0,
    onSelect: null,
  };

  state = { selected: this.props.selected };

  /**
   * Select a new tab.
   *
   * @param {Number} selected the index of the new selection.
   */
  select(selected) {
    this.setState({ selected });
    if (this.props.onSelect) {
      this.props.onSelect(selected);
    }
  }

  /**
   * Render the tabs for user selection.
   */
  renderTabs() {
    return React.Children.map(this.props.children, (child, index) => {
      return React.cloneElement(child, {
        select: this.select,
        index: index,
        selected: index === this.state.selected,
      });
    });
  }

  /**
   * Render the content of the selected tab.
   */
  renderContent() {
    const children = this.props.children;
    const selected = this.state.selected;
    if(children[selected]) {
      return children[selected].props.children;
    }
  }

  render() {
    return (
      <div className="tabs">
        <div className="tabs-navigation">
          {this.renderTabs()}
        </div>
        <div className="tabs-content">
          {this.renderContent()}
        </div>
      </div>
    );
  }
}

/**
 * Tabs contains multiple Tab elements.
 */
class Tab extends Component {
  constructor(props) {
    super(props);

    this.select = this.select.bind(this);
  }

  /**
   * Select the current tab.
   */
  select() {
    this.props.select(this.props.index);
  }

  render() {
    return (
      <button className={"tabs-tab " + (this.props.selected ? "active" : "")} onClick={(e) => {
        e.preventDefault();
        this.select();
      }}>
        {this.props.title}
      </button>
    );
  }
}

Tab.propTypes = {
  select: PropTypes.func,
  selected: PropTypes.bool,
  title: PropTypes.string,
  onSelect: PropTypes.func,
};

export { Tabs, Tab };