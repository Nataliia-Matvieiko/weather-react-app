import image_01d from './01d.png';
import image_01n from './01n.png';
import image_02d from './02d.png';
import image_02n from './02n.png';
import image_03d from './03d.png';
import image_03n from './03n.png';
import image_04d from './04d.png';
import image_04n from './04n.png';
import image_09d from './09d.png';
import image_09n from './09n.png';
import image_10d from './10d.png';
import image_10n from './10n.png';
import image_11d from './11d.png';
import image_11n from './11n.png';
import image_13d from './13d.png';
import image_13n from './13n.png';
import image_50d from './50d.png';
import image_50n from './50n.png';

const images = new Map();
images.set("01d", image_01d)
images.set("01n", image_01n)
images.set("02d", image_02d)
images.set("02n", image_02n)
images.set("03d", image_03d)
images.set("03n", image_03n)
images.set("04d", image_04d)
images.set("04n", image_04n)
images.set("09d", image_09d)
images.set("09n", image_09n)
images.set("10d", image_10d)
images.set("10n", image_10n)
images.set("11d", image_11d)
images.set("11n", image_11n)
images.set("13d", image_13d)
images.set("13n", image_13n)
images.set("50d", image_50d)
images.set("50n", image_50n)

images.set("clear-sky-day", image_01d)
images.set("few-clouds-day", image_02d)
images.set("scattered-clouds-day", image_03d)
images.set("broken-clouds-day", image_04d)
images.set("shower-rain-day", image_09d)
images.set("rain-day", image_10d)
images.set("thunderstorm-day", image_11d)
images.set("snow-day", image_13d)
images.set("mist-day", image_50d)
images.set("clear-sky-night", image_01n)
images.set("few-clouds-night", image_02n)
images.set("scattered-clouds-night", image_03n)
images.set("broken-clouds-night", image_04n)
images.set("shower-rain-night", image_09n)
images.set("rain-night", image_10n)
images.set("thunderstorm-night", image_11n)
images.set("snow-night", image_13n)
images.set("mist-night", image_50n)

export const getWeatherImage = (image) => {
    const icon = images.get(image);
    if(!icon) {
        console.log(image)
        return image_01d;
    }
    return icon;
};
