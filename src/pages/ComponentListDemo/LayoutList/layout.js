module.exports = {
    xname: 'SelectBox',
    props: {
        align: 'start',
        direction: 'row',
        line:{
            activeLeftLine: '0'
        }
    },
    gateway: {
        xname: 'Binding',
        props: {
            binding: {
                name: 'name',
                pathUrl: 'pathUrl',
                imageUrl: 'imageUrl',
            }
        }
    },
    cart: {
        xname: 'SelectCart',
        props: {
            padding: '10px',
        }
    },
    container: 'SelectedList'
}