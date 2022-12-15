import StartAutoLayout from '../../StartAutoLayout'

import ContainerContext from '@/components/AutoX/ContainerContext'

export default function Sandbox(props){

    // const data = { 
    //     items: [ 
    //         {avatarUrl : "http://local.webtools.io/pepsi.png"},
    //         {avatarUrl : "http://local.webtools.io/master.jpg"},
    //         {avatarUrl : "http://local.webtools.io/pepsi.png"},
    //     ]
    // }
    const data = {
        avatarUrl : "http://local.webtools.io/pepsi.png"
    }

    return (
    
    <ContainerContext.Provider>
        <StartAutoLayout {...data} />
    </ContainerContext.Provider>

    )
}
