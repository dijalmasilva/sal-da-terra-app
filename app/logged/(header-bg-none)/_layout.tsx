import {ScrollView, View} from "react-native";
import Header from "@/components/header/header";
import {Slot} from "expo-router";
import MenuTabs from "@/components/menu-tabs/menu-tabs";

const Layout = () => {
  return (
    <>
      <View style={{flex: 1}} className="bg-salt-white">
        <Header transparency />
        <ScrollView className="p-6">
          <Slot />
        </ScrollView>
        <MenuTabs />
      </View>
    </>
  )
}

export default Layout
