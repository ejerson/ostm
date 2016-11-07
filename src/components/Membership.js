import React from 'react';
import { RouteTransition } from 'react-router-transition';

export default React.createClass({
  render() {
    return (
      <div className='text'>
        <RouteTransition
          pathname={this.props.location.pathname}
          atEnter={{ translateY: -100 }}
          atLeave={{ translateY: 100 }}
          atActive={{ translateY: 0 }}
          mapStyles={styles => ({ transform: `translateY(${styles.translateY}%)` })}
          >
          <h1>membership</h1>
          <img src={require("./images/coming-soon.gif")} />
        </RouteTransition>
      </div>

    );
  }
});
