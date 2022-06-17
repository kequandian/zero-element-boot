import React from 'react';



export default  function Index(props) {

  const { children, color='#8e72ff', solid, outline ,none,plain, dash  } = props;

  const isSolid = {
    color:'#ffffff',
    backgroundColor:`${color}`,
    textAlign:'center',
    height:'100%',
    display:'flex', 
    justifyContent:'center',
     alignItems:'center' ,
     minWidth:'150px'
  }
  const isOutline = {
    color:`${color}`,
    backgroundColor:`${color}26`,
    textAlign:'center',
    height:'100%',
    border:`2px ${color} solid`,
    display:'flex', 
    justifyContent:'center',
     alignItems:'center' ,
     minWidth:'150px'
  }

  const isNone = {
    color:`${color}`,
    backgroundColor:`${color}26`,
    height:'100%',
    textAlign:'center',
    display:'flex', 
    justifyContent:'center',
     alignItems:'center' ,
     minWidth:'150px'
  }

  const isPlain = {
    color:`${color}`,
    backgroundColor:'#ffffff',
    textAlign:'center',
    height:'100%',
    border:`2px ${color} solid` ,
    display:'flex', 
    justifyContent:'center',
     alignItems:'center' ,
     minWidth:'150px'
  }

  const isDash = {
    color:`${color}`,
    backgroundColor:`${color}26`,
    textAlign:'center',
    height:'100%',
    border:`2px ${color} dashed`,
    display:'flex', 
    justifyContent:'center',
     alignItems:'center' ,
     minWidth:'150px'

  }

  const styles = solid  ?  isSolid : 
                 outline && none ? isNone : 
                 outline && plain ? isPlain : 
                 outline && dash ? isDash :
                 outline ? isOutline :  null
             
  return (
    <div style={styles}>
      {
        React.Children.map(children, child =>(
          child
        ))
      }
  </div>
  )
}