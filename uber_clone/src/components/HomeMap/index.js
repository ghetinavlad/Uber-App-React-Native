import React from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import MapView , {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import cars from '../../assets/data/cars';

import carsData from '../../assets/data/cars';

const HomeMap = (props) => {

    const getImage = (type) => {
        if(type === 'UberX'){
            return require('../../assets/images/top-UberX.png')
        }
        if(type === 'Comfort'){
            return require('../../assets/images/top-Comfort.png')
        }
        if(type === 'UberXL'){
            return require('../../assets/images/top-UberXL.png')
        }
    }
    return (
        <MapView
            style={{width:'100%', height:'100%'}}
            provider={PROVIDER_GOOGLE}
            initialRegion={{
            latitude: 28.450627,
            longitude: -16.263045,
            latitudeDelta: 0.0222,
            longitudeDelta: 0.0121,
            }}
            >
            {carsData.map((car) => (
                <Marker
                  key={car.id}
                  coordinate={{latitude:car.latitude, longitude: car.longitude}}>
                    <Image
                     style={{width:70, height:70,
                             resizeMode:'contain',
                             transform:[{
                                 rotate:`${car.heading}deg`
                             }]
                            }}
                     source={getImage(car.type)}
                     />
                </Marker>
            ))}

        </MapView>       
        
    );
};

export default HomeMap;