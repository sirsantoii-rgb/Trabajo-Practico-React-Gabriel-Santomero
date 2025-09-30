const contacts = [
    {
        id: 1,
        name: 'Gabriel',
        last_time_connected: '16 de octubre del 2022',
        is_connected: false,
        profile_img: 'https://cdn.mos.cms.futurecdn.net/nyU6UyNw4B4QVLj69n5hbe-650-80.jpg.webp',
        state: 'Tu espera ese dia y cuando llegue ese dia, ese sera el dia',
        messages: [
            {
                id: 1,
                author: 'YO',
                content: "Que tal!",
                timestamp: '16:17'
            }
        ]
    },
    {
        id: 2,
        name: 'maria',
        last_time_connected: 'ahora',
        is_connected: true,
        profile_img: 'https://ih1.redbubble.net/image.2323779696.9641/raf,360x360,075,t,fafafa:ca443f4786.jpg',
        state: 'Tu espera ese dia y cuando llegue ese dia, ese sera el dia',
        messages: [
            {
                id: 1,
                author: 'YO',
                content: "Hola maria, todo bien?",
                timestamp: '16:17'
            },
            {
                id: 2,
                author: 'maria',
                content: "si.",
                timestamp: '16:18'
            }
        ]
    }
]

export default contacts