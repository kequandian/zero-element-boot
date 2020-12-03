import React from 'react';
import { List, Row } from 'antd';

export default function SimpleList(props) {

  const { children, items, layout } = props;

  const Child = React.Children.only(children);

  return <Row justify={layout.props.justify}>
        <List
          grid={{column: layout.props.column? layout.props.column : 0 }}
          dataSource={items}
          renderItem={item => React.isValidElement(Child) ?
            React.cloneElement(Child, {
              ...item
            })
            : <Child {...item} />
          }
        />
  </Row>
}