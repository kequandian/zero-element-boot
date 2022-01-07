import React from 'react';

require('./index.less')

export default ({styles={}}) => {
  return <div className="loading" style={styles}></div>
}