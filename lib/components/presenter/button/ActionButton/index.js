import React from 'react';
import { Button } from '@chakra-ui/react';
export default function ActionButton(props) {
  const {
    props: otherProps,
    onActionCompleted,
    ...rest
  } = props;
  const {
    content
  } = otherProps;
  const btnClick = () => {
    if (onActionCompleted) {
      onActionCompleted(otherProps);
    }
  };
  return /*#__PURE__*/React.createElement(Button, {
    onClick: btnClick
  }, content);
}