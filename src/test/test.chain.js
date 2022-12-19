import doChain from '../components/gateway/doChain.mjs';

const data = {
    "users":[
        {
           "name":"Bob",
           "profile": {
               "avatarUrl":"https://",
               "age": 15
           }
        },
       {
           "name":"Jose",
           "profile": {
               "avatarUrl":"https://avatars/jose.png",
               "age": 21
           }
        }
    ]
 }


const chain = [
      {
        "|": {
           "users":[]
        }
      },
      {
         "_": 1
      },
      {
        "|": {
           "profile": {}
        }
      },
      {
        "avatarUrl": "url"
      }
]

const chainData = doChain(chain, data)
console.log(chainData)

