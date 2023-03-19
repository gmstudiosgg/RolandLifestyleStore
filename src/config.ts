export default {
    //SCENE FACING: "NORTH"/"EAST"/"SOUTH"/"WEST"
    sceneOrientation: "NORTH",
    logo: {
        bottom: {
            //image should be 512px square
            imgSrc: "images/logo.png",
            position: new Vector3(6.96862, 5.72577, 7.34845)
        },
        top: {
            name: "Roland Lifestyle",
            fontSize: 6,
            color: new Color3(255, 102, 0),
            position: new Vector3(0, 5.84663, 6.39477)
        }
    },
    socialMedia: [
        {
            name: "ROLAND LIFESTYLE",
            model: "models/social_media/homepage.glb",
            link: "https://www.rolandlifestyle.io/",
            position: new Vector3(1.5, 1.3, -5.35)
        },
        {
            name: "TWITTER",
            model: "models/social_media/discord.glb",
            link: "https://twitter.com/RolandLifestyle",
            position: new Vector3(0.5, 1.3, -5.35)
        },
        {
            name: "GM STUDIOS",
            model: "models/social_media/twitter.glb",
            link: "https://www.gmstudios.gg/",
            position: new Vector3(-0.5, 1.3, -5.35)
        },
        {
            name: "RANDOM RAVERS",
            model: "models/social_media/telegram.glb",
            link: "https://twitter.com/randomraversgg",
            position: new Vector3(-1.5, 1.3, -5.35)
        }
    ],
    videoScreen: {
        src: "https://player.vimeo.com/external/809539680.m3u8?s=f5b98cec00bd7ef345949673fcb395399711e80b",
        width: 1280,
        height: 720
    },
    wearable: [
        {
            name: "808 Puffer Jacket",
            model: "models/wearables/1.glb",
            link: "https://market.decentraland.org/contracts/0x873c11f798fc6f6c370c40f460aae4e20069b105/items/2",
            position: new Vector3(4.2, -0.1, 5.1),
            rotation: Quaternion.Euler(0, 0, 0)
        },
        {
            name: "808 Puffer Jacket MVFW",
            model: "models/wearables/2.glb",
            link: "https://market.decentraland.org/",
            position: new Vector3(-4.2, -0.1, 5.1),
            rotation: Quaternion.Euler(0, 0, 0)
        },
        {
            name: "Katakana Track Jacket",
            model: "models/wearables/3.glb",
            link: "https://market.decentraland.org/",
            position: new Vector3(5.1, -1, -3.3),
            rotation: Quaternion.Euler(0, -90, 0)
        },
        {
            name: "Sequencer Shirt", 
            model: "models/wearables/4.glb",
            link: "https://market.decentraland.org/contracts/0x873c11f798fc6f6c370c40f460aae4e20069b105/items/0/",
            position: new Vector3(-5.1, -1, -3.3),
            rotation: Quaternion.Euler(0, 90, 0)
        },
        {
            name: "Launch TShirt",
            model: "models/wearables/5.glb",
            link: "https://market.decentraland.org/",
            position: new Vector3(0, -0.1, 0.7),
            rotation: Quaternion.Euler(0, 0, 0)
        },
        {
            name: "CitySneakers",
            model: "models/wearables/6.glb",
            link: "https://market.decentraland.org/",
            position: new Vector3(1, 0.7, -0.7),
            rotation: Quaternion.Euler(0, 45, 0)
        },
        {
            name: "Rollers",
            model: "models/wearables/7.glb",
            link: "https://market.decentraland.org/",
            position: new Vector3(-1, 0.7, -0.7),
            rotation: Quaternion.Euler(0, -45, 0)
        },
    ]
}