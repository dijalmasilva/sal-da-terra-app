import {View} from "react-native";
import {Slot} from "expo-router";

const Layout = () => {
  return (
    <>
      <View style={{flex: 1}} className="bg-salt-white">
        <Slot />
      </View>
    </>
  )
}

export default Layout
