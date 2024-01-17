import {Text, TouchableOpacity, View} from "react-native";
import {LucideBook, LucideCalendar, LucideHeart, LucideHome} from "lucide-react-native";
import {router} from "expo-router";

const MenuTabs = () => {
  const onClick= (route: string) => {
    router.push(route);
  }

  return (
    <View className="px-4 mb-4 bg-none">
      <View className="bg-white rounded-3xl px-4 py-2 flex-row justify-evenly shadow-2xl mt-1" style={{ gap: 24 }}>
        <TouchableOpacity className="items-center" onPress={() => onClick('/logged/home')}>
          <LucideHome className="text-salt-blue" />
          <Text className="font-bold">Início</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center" onPress={() => onClick('/logged/cult')}>
          <LucideCalendar className="text-salt-blue" />
          <Text className="font-bold">Cultos</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center" onPress={() => onClick('/logged/contributed')}>
          <LucideHeart className="text-salt-blue" />
          <Text className="font-bold">Contribua</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center" onPress={() => onClick('/logged/bible')}>
          <LucideBook className="text-salt-blue" />
          <Text className="font-bold">Bíblia</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default MenuTabs