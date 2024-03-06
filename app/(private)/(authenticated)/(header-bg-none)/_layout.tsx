import {View} from "react-native";
import {Slot} from "expo-router";

const Layout = () => {
  return (
    <>
      <View style={{flex: 1}} className="bg-salt-white pt-8">
        <Slot />
      </View>
    </>
  )
}

export default Layout
