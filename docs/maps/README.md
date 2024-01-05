# [react-native-maps](hhttps://github.com/react-native-maps/react-native-maps)

```sh
npx expo install react-native-maps
npx expo install expo-location
```

```tsx
import { useNavigation } from "expo-router";
import { useEffect, useRef } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MapView, { PROVIDER_GOOGLE, Region } from "react-native-maps";

const INITIAL_REGION = {
  latitude: 37.33,
  longitude: -122,
  latitudeDelta: 2,
  longitudeDelta: 2,
};

export default function App() {
  const navigation = useNavigation();
  const mapRef = useRef<any>();

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={focusMap}>
          <View style={{ padding: 10 }}>
            <Text>Focus</Text>
          </View>
        </TouchableOpacity>
      ),
    });
  }, []);

  const focusMap = () => {
    const GreenBayStadium = {
      latitude: 44.5013,
      longitude: -88.0622,
      latitudeDelta: 0.1,
      longitudeDelta: 0.1,
    };

    mapRef.current?.animateToRegion(GreenBayStadium);
  };

  const onRegionChange = (region: Region) => {
    console.log(region);
  };

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={StyleSheet.absoluteFillObject}
        initialRegion={INITIAL_REGION}
        showsUserLocation
        showsMyLocationButton
        provider={PROVIDER_GOOGLE}
        ref={mapRef}
        onRegionChangeComplete={onRegionChange}
      ></MapView>
    </View>
  );
}
```

```tsx
import { StyleSheet, View } from "react-native";
import MapView from "react-native-maps";

import * as Location from "expo-location";
import { useEffect, useState } from "react";

const Airbnb = () => {
  const [location, setLocation] = useState<any>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  console.log(location);
  if (!location) return null;

  return (
    <View>
      <MapView
        style={styles.map}
        initialRegion={location}
        showsUserLocation
        showsMyLocationButton
      />
    </View>
  );
};

export default Airbnb;

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%",
  },
});
```

```json
{
  "coords": {
    "accuracy": ....,
    "altitude": ....,
    "altitudeAccuracy": ....,
    "heading": ....,
    "latitude": ....,
    "longitude":....,
    "speed": ....
  },
  "mocked": false,
  "timestamp": 1704471615483
}
```

> [location](https://gps-coordinates.org/)
