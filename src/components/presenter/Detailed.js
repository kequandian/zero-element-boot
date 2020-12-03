import { Typography } from 'antd';
const { Paragraph } = Typography;

export default function (props) {

  const { text } = props;

    return <Paragraph ellipsis={{ rows: 3, expandable: true, symbol: 'more' }}>
    {text}
  </Paragraph>
}
