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
