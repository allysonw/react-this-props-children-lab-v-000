// Code ThemedDecoration Component Here
import React from 'react';

export default class ThemedDecoration extends React.Component {
  render() {

    const myClassName = this.props.theme;

    const modifiedChildren = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        className: myClassName
      });
    });

    return (
      <div>
        {modifiedChildren}
      </div>
    );
  }
}
