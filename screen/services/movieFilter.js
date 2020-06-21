import Geocoder from 'react-native-geocoder';
import Geolocation from '@react-native-community/geolocation';
import { translate } from '../../languages/utils';

export const getLocation = async () => {
    return new Promise((resolve, reject) => {
        Geolocation.getCurrentPosition(
            (location) => {
                //console.log(location);
                resolve(location);
            },
            (error) => {
                console.log('getCurrentPosition', error)
                reject(error);
            }
        );
    });
};

export const filterByCountry = async (movies, geolocation) => {
    const location = await Geocoder.geocodePosition({
        lat: geolocation.coords.latitude,
        lng: geolocation.coords.longitude,
    });
    //console.log('location', location);
    const national = movies.filter((item, index) => {
        //console.log(translate(location[0].country));
        //console.log(translate(location[0].countryCode));
        return (
            item.Country.indexOf(translate(location[0].country)) !== -1 ||
            item.Country.indexOf(translate(location[0].countryCode)) !== -1);
    });
    return national;
}