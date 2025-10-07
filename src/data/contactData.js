const contacts = [
    {
        id: 1,
        name: 'Gabriel Roll',
        last_time_connected: '16 de octubre del 2022',
        isOnline: "Online",
        profile_img: 'https://images.imagenmia.com/example_images/1728239357756-92ab43c0-ff78-40d6-8ffb-fb7d648e0421.webp',
        state: 'Aprendiendo a jugar',
        level: "Lv. 10",
        game: "D&D",
        clase: "Guerrero",
        messages: [
            {
                id: 2,
                author: 'Gabriel Roll',
                content: "Hoy jugamos roll?, compre un nuevo tablero!",
                timestamp: '16:17'
            },
                        {
                id: 1,
                author: 'YO',
                content: "Que tal!",
                timestamp: '17:20'
            },
                        {
                id: 1,
                author: 'YO',
                content: "Si, claro que hoy jugamos!",
                timestamp: '17:21'
            },
                        {
                id: 1,
                author: 'Gabriel Roll',
                content: "Genial",
                timestamp: '17:30'
            }
        ]
    },
    {
        id: 2,
        name: 'Masha Mashlov',
        last_time_connected: 'ahora',
        isOnline: "Online",
        profile_img: 'https://imgcdn.stablediffusionweb.com/2024/3/13/bc76cd5b-8c58-4773-a6b1-3c301b72bb7e.jpg',
        state: 'En mi mejor momento',
        level: "Lv. 2",
        game: "CiberPunk",
        clase: "Hacker",
        messages: [
            {
                id: 1,
                author: 'YO',
                content: "Masha, hoy no jugaremos a Ciberpunk, tal vez mañana",
                timestamp: '18:30'
            },
            {
                id: 2,
                author: 'Masha Mashlov',
                content: "vale, entonces mañana..",
                timestamp: '18:32'
            },
            {
                id: 1,
                author: 'YO',
                content: "como vas con tu personaje?",
                timestamp: '18:40'
            },
                        {
                id: 2,
                author: 'Masha Mashlov',
                content: "bien, aunque me falta, un poco.",
                timestamp: '19:02'
            },
        ]
    },
    {
        id: 3,
        name: 'Juan Uni',
        last_time_connected: 'ahora',
        isOnline: "Offline",
        profile_img: 'https://images.imagenmia.com/example_images/1728239938850-843d40d6-684b-4d14-aeaa-89f430561a4e.webp',
        state: 'Viajando',
        level: "Lv. 4",
        game: "D&D",
        clase: "Bardo",
        messages: [
            {
                id: 1,
                author: 'YO',
                content: "Te conectas esta noche???",
                timestamp: '16:40'
            },
            {
                id: 2,
                author: 'Juan Uni',
                content: "si, ya me estoy conectando",
                timestamp: '16:52'
            },
            {
                id: 1,
                author: 'YO',
                content: "compraste todo lo necesario?",
                timestamp: '17:04'
            },
            {
                id: 2,
                author: 'Juan Uni',
                content: "ni hablar",
                timestamp: '17:20'
            }
        ]
    },
    {
        id: 4,
        name: 'Carmen Sanchez',
        last_time_connected: 'ahora',
        isOnline: "Online",
        profile_img: 'https://images.imagenmia.com/example_images/1728239937391-afd4e795-4897-4d43-b7f9-8e119290fd97.webp',
        state: 'Probando esta nueva app',
        level: "Lv.2",
        game: "D&D",
        clase: "Elfo",
        messages: [
            {
                id: 4,
                author: 'Carmen Sanchez',
                content: "Buenas, tanto tiempo!! Aun siguen jugando",
                timestamp: '16:40'
            },
            {
                id: 1,
                author: 'YO',
                content: "si, aun estamos jugando con los chicos, quieres jugar tu tambien?",
                timestamp: '16:52'
            },
            {
                id: 4,
                author: 'Carmen Sanchez',
                content: "se puede?, hace tiempo que no juego...",
                timestamp: '17:04'
            },
            {
                id: 1,
                author: 'YO',
                content: "Tranquila, verás que podras volver a jugar sin problema.",
                timestamp: '17:20'
            }
        ]
    },
    {
        id: 5,
        name: 'Elena Trabajo',
        last_time_connected: 'ahora',
        isOnline: "Online",
        profile_img: 'https://cdn.pixabay.com/photo/2024/06/16/17/31/ai-generated-8833911_1280.jpg',
        state: 'La vida es una caja de sorpresas',
        level: "Lv.6",
        game: "CiberPunk",
        clase: "Soldado",
        messages: [
            {
                id: 5,
                author: 'Elena Trabajo',
                content: "Que tal todo por allí? hace tiempo que no te veo..",
                timestamp: '16:40'
            },
            {
                id: 1,
                author: 'YO',
                content: "Elena! Si, hace tiempo que no nos vemos, he estado ocupado creando mi web",
                timestamp: '16:52'
            },
            {
                id: 5,
                author: 'Elena Trabajo',
                content: "parece complicada la cosa, que tal te va?",
                timestamp: '17:04'
            },
            {
                id: 1,
                author: 'YO',
                content: "Como explicarlo...",
                timestamp: '17:20'
            },
                        {
                id: 1,
                author: 'YO',
                content: "creo que aprobare con mi web para juegos",
                timestamp: '17:20'
            }
        ]
    },
    {
        id: 6,
        name: 'Pedro Master',
        last_time_connected: 'ahora',
        isOnline: "Online",
        profile_img: 'https://cdn.pixabay.com/photo/2024/05/17/21/15/ai-generated-8769114_1280.jpg',
        state: 'Soy un libro de sorpresas',
        level: "Master",
        game: "D&D",
        clase: "Master",
        messages: [
            {
                id: 6,
                author: 'Pedro Master',
                content: "Eeeeeey, ya aprendiste las reglas para jugar?",
                timestamp: '16:40'
            },
            {
                id: 1,
                author: 'YO',
                content: "La verdad que no, me puedes explicar un poco?",
                timestamp: '16:52'
            },
            {
                id: 6,
                author: 'Pedro Master',
                content: "claro, tienes tiempo?",
                timestamp: '17:04'
            },
            {
                id: 1,
                author: 'YO',
                content: "me explicas por aqui?",
                timestamp: '17:20'
            },
                        {
                id: 6,
                author: 'Pedro Master',
                content: "Esta web es la ideal para eso",
                timestamp: '17:20'
            },
            {
                id: 6,
                author: 'Pedro Master',
                content: "primero, elige un juego y un personaje",
                timestamp: '17:04'
            },
            {
                id: 6,
                author: 'Pedro Master',
                content: "podes hacerlo desde las opciones del costado",
                timestamp: '17:04'
            },
            {
                id: 1,
                author: 'YO',
                content: "ahh.. ya veo! elijo que quiero ser?",
                timestamp: '17:20'
            },
                        {
                id: 6,
                author: 'Pedro Master',
                content: "si, no te olvides de guardar!",
                timestamp: '17:04'
            },
        ]
    }
]

export default contacts