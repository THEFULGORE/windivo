import clear from './Media/background/clear.jpg'
import cloud from './Media/background/cloud.jpg'
import mist from './Media/background/mist.jpg'
import rain from './Media/background/rain.jpg'
import snow from './Media/background/snow.jpg'
import thunderstorm from './Media/background/thunderstorm.jpg'

export const changeBackground = (id) => {
    let type = clear
    if(id < 300) type = thunderstorm
    else if (id >= 300 && id < 600) type = rain
    else if (id >=600 && id <= 622) type = snow
    else if (id > 622 && id <= 781) type = mist
    else if (id >= 801 && id <=804) type = cloud
    document.body.style.background = `url(${type}) no-repeat center center/cover`
}