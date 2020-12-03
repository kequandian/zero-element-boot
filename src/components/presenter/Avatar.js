import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

export default function (props) {

    const { icon } = props;

    return <Avatar size={64} icon={ icon? icon : <UserOutlined />} />
}