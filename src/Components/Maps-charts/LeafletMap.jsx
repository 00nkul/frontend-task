import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import axios from 'axios';
import 'leaflet/dist/leaflet.css';

const LeafletMap = () => {
    const [countriesData, setCountriesData] = useState([]);
    
    useEffect(() => {
        // Fetch country-specific data
        axios.get('https://disease.sh/v3/covid-19/countries')
            .then(response => {
                setCountriesData(response.data);
            })
            .catch(error => {
                console.error('Error fetching country data:', error);
            });
    }, []);

    return (
        <MapContainer
            center={[20, 0]}
            zoom={2}
            style={{ width: '100%', height: '100vh' }}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {/* Country markers */}
            {countriesData.map(country => (
                <Marker
                    key={country.country}
                    position={[country.countryInfo.lat, country.countryInfo.long]}
                >
                    <Popup>
                        <div>
                            <strong>{country.country}</strong><br />
                            Cases: {country.cases}<br />
                            Recovered: {country.recovered}<br />
                            Deaths: {country.deaths}
                        </div>
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default LeafletMap;