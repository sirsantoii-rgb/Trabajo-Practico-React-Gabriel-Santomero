const contacts = [
    {
        id: 1,
        name: 'Gabriel',
        last_time_connected: '16 de octubre del 2022',
        isOnline: "Online",
        profile_img: 'https://cdn.mos.cms.futurecdn.net/nyU6UyNw4B4QVLj69n5hbe-650-80.jpg.webp',
        state: 'Aprendiendo a jugar',
        level: "Lv. 10",
        game: "D&D",
        clase: "guerrero",
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
        name: 'Masha',
        last_time_connected: 'ahora',
        isOnline: "Online",
        profile_img: 'https://ih1.redbubble.net/image.2323779696.9641/raf,360x360,075,t,fafafa:ca443f4786.jpg',
        state: 'En mi mejor momento',
        level: "Lv. 2",
        game: "CiberPunk",
        clase: "Hacker",
        messages: [
            {
                id: 1,
                author: 'YO',
                content: "Masha, hoy sale jugar?",
                timestamp: '16:17'
            },
            {
                id: 2,
                author: 'Masha',
                content: "si, estar lista para hoy",
                timestamp: '16:18'
            },
            {
                id: 1,
                author: 'YO',
                content: "como vas con el Español?",
                timestamp: '16:17'
            },
                        {
                id: 2,
                author: 'Masha',
                content: "yo estar bien, habla mejor que ayer",
                timestamp: '16:18'
            },
        ]
    },
    {
        id: 3,
        name: 'Juan',
        last_time_connected: 'ahora',
        isOnline: "Offline",
        profile_img: 'https://ih1.redbubble.net/image.2323779696.9641/raf,360x360,075,t,fafafa:ca443f4786.jpg',
        state: 'Viajando',
        level: "Lv. 4",
        game: "D&D",
        clase: "Bardo",
        messages: [
            {
                id: 1,
                author: 'YO',
                content: "Te conectas esta noche???",
                timestamp: '16:17'
            },
            {
                id: 2,
                author: 'Juan',
                content: "si, ya me estoy conectando",
                timestamp: '16:18'
            },
            {
                id: 1,
                author: 'YO',
                content: "compraste todo lo necesario?",
                timestamp: '16:17'
            },
            {
                id: 2,
                author: 'Juan',
                content: "ni hablar",
                timestamp: '16:18'
            }
        ]
    }
]

export default contacts