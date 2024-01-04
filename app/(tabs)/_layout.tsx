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
