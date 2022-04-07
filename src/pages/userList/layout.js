module.exports = {
    xname: 'Flexbox',
    props: {
        align: 'start',
        direction: 'column',
        flexWidth: 'auto-full'
    },
    presenter: {
        xname: 'Flexbox',
        props: {
            align: 'start',
            direction: 'row'
        },
        children: [
            {
                presenter: 'Avatar',
                gateway: {
                    xname: 'Binding',
                    props: {
                        binding: {
                            avatar: 'url'
                        }
                    }
                }
            },
            {
                presenter: "Title",
                gateway: {
                    xname: "Binding",
                    props: {
                        binding: {
                            name: "titleText"
                        }
                    }
                }
            },
        ]
    },
    cart: {
        xname: 'HoverShadowCart',
        props: {
        }
    },
    container: 'ItemClickList',
}