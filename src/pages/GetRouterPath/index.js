
import useRouterParams from '@/components/hooks/useRouterParams';

export default function GetRouterPath(props) {

    const [ params ] = useRouterParams(props)

    return (
        <>
            <div>当前路由参数: {JSON.stringify(params)}</div>
        </>
    )
}