import { Stack } from "expo-router";
import React from "react";

const Layout = () => (
  <Stack>
    <Stack.Screen
      name="index"
      options={{ title: "Home", headerShown: false }}
    />
  </Stack>
);

export default Layout;
