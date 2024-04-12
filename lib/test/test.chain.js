import doChain from '../components/gateway/doChain.mjs';
import doFilter from '../components/gateway/doFilter.mjs';
const data = {
  "users": [{
    "name": "Bob",
    "profile": {
      "avatarUrl": "https://",
      "age": 15
    }
  }, {
    "name": "Jose",
    "profile": {
      "avatarUrl": "https://avatars/jose.png",
      "age": 21
    }
  }],
  "data": {
    code: 200
  }
};
const filter = {
  users: "items"
};
const chain = [{
  "|": {
    "users": "items"
  }
}, {
  items: [{
    name: "title"
  }]
}];
const chainData = doChain(chain, data);
// const filterData = doFilter(filter, data)

// console.log(filterData)
console.log(chainData);