import { Typography } from 'antd';
const { Title } = Typography;

export default function (props) {

    const { title } = props;

    return <Title level={3}>{title}</Title>
}