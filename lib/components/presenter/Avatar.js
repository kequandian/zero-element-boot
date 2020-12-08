import { UserOutlined } from '@ant-design/icons';
export default function (props) {
  const {
    avatarIcon
  } = props;
  let url = 'http://192.168.3.236:8888';

  if (avatarIcon) {
    return /*#__PURE__*/React.createElement("img", {
      src: url + avatarIcon,
      style: {
        width: '64px',
        height: '64px',
        borderRadius: '32px'
      }
    });
  } else {
    return /*#__PURE__*/React.createElement("img", {
      src: "",
      style: {
        width: '64px',
        height: '64px',
        borderRadius: '32px',
        backgroundColor: '#cccccc'
      }
    });
  }
}