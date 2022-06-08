module.exports={
    xname:"Flexbox",
    props:{
        align:"start",
        direction:"column",
        justidy:"center"
    },
    gateway:{
        xname:"Binding",
        props:{
            binding:{
                imgUrl:"imgUrl",
                title:"title",
                text:"text",
                time:"time"
            }
        }
    },
    cart:{
        xname:"Cart",
        indicator: "SelectIndicatorCart",
        props:{
            padding:'10px',
            corner: ''
        }
    },
    container:"SelectList"
}