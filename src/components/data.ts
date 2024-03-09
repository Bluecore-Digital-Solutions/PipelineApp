import firstHouse from "../assets/house1.jpg";
import secondHouse from "../assets/house2.jpg";
import thirdHouse from "../assets/house3.jpg";
import man from '../assets/person1.jpg';
import woman from '../assets/person2.jpg';

export const campaignData = [
    {   
        id: 1,
        title: "Mongo Park",
        location: "Ketu-Epe",
        imageUrl: firstHouse,
        clients: 6,
        campaigns: 3

    },
    {   
        id: 2,
        title: "Treasure Homes",
        location: "Ketu-Epe",
        imageUrl: secondHouse,
        clients: 2,
        campaigns: 8

    },
    {   
        id: 3,
        title: "Merry View Homes",
        location: "Ibeju-Lekki",
        imageUrl: thirdHouse,
        clients: 8,
        campaigns: 4

    },
    {   
        id: 4,
        title: "Pavillon Homes",
        location: "Abijo-Lekki",
        imageUrl: thirdHouse,
        clients: 2,
        campaigns: 4

    },
]

export const clientData = [
    {
        id: 1,
        imageUrl: woman,
        name: "Gloria Amber",
        email: "gloriaadeola@gmail.com",
        phone: "+234-2345555",
    },
    {
        id: 2,
        imageUrl: man,
        name: "John Doe",
        email: "johnigboka@gmail.com",
        phone: "+234-813334495",
    }
]