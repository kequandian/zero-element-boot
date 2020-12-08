import { Typography } from 'antd';
const {
  Title
} = Typography;
export default function (props) {
  const {
    TitleText
  } = props;
  return /*#__PURE__*/React.createElement(Title, {
    level: 3
  }, TitleText);
}