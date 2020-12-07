import { Typography } from 'antd';
const { Title } = Typography;

export default function (props) {

    const { TitleText } = props;

    return <Title level={3}>{TitleText}</Title>
}