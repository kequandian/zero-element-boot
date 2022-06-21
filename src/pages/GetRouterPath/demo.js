import { history } from 'umi';

export default function Index(props){

    history.push({
        pathname: '/GetRouterPath',
        query:{
          id: '20'
        }
      })

      return <div></div>
}