import { UserOutlined } from '@ant-design/icons';

export default function (props) {

    const { avatarIcon } = props;

    if(avatarIcon){
        return <img src={avatarIcon}  style={{width:'64px', height:'64px', borderRadius:'32px'}} />;
    }else {
        return <img src=''  style={{width:'64px', height:'64px', borderRadius:'32px', backgroundColor:'#cccccc'}} />;
    }

}