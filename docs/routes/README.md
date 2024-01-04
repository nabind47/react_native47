# [Expo Router](https://docs.expo.dev/router/installation/#quick-start)

```tsx
import { Link, router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

const Home = () => {
  return (
    <View>
      <Link href="/users/1">Profile</Link>
      <Pressable onPress={() => router.push("/users/2")}>
        <Text>Profile</Text>
      </Pressable>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
```

```tsx
import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

const Profile = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>Profile {id}</Text>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
```

```tsx
import { Stack } from "expo-router";

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerTitle: "Home" }} />
      <Stack.Screen name="users/[id]" options={{ headerTitle: "Profile" }} />
    </Stack>
  );
};

export default RootLayout;
```

---

```tsx
import { Stack } from "expo-router";

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
};

export default RootLayout;
```

```tsx
import { Tabs } from "expo-router";

const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{ headerTitle: "Home", title: "Home" }}
      />
      <Tabs.Screen
        name="users/[id]"
        options={{ headerTitle: "Profile", title: "Profile" }}
      />
    </Tabs>
  );
};

export default TabsLayout;
```
