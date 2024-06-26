const images = {
    1: require("../assets/apple.png"),
    2: require("../assets/spotify.png"),
    3: require("../assets/moneyTransfer.png"),
    4: require("../assets/grocery.png")
}

const getImage = (imageId) => {
    for (let key in images) {
        if (images.hasOwnProperty(key) && key === imageId) {
            return images[imageId];
        }
      }
}


export default getImage;