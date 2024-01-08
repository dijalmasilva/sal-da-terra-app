import {Slot, useRouter} from "expo-router";
import {Image, SafeAreaView, ScrollView, TouchableOpacity, View} from "react-native";
import {ArrowLeftIcon} from "lucide-react-native";

const Layout = () => {
  const router = useRouter()

  const back = () => {
    router.back()
  }

  return (
      <SafeAreaView className="bg-salt-white min-h-full">
        <ScrollView automaticallyAdjustKeyboardInsets={true}>
          <View className="items-center p-6">
            <View className="w-full items-start">
              <TouchableOpacity onPress={back}>
                <ArrowLeftIcon className="text-salt-blue font-bold" size={28} />
              </TouchableOpacity>
            </View>
            <View className="w-[200px] h-[133px] relative">
              <Image source={require('@/assets/logos/blue/saldaterra.png')}
                     style={{objectFit: 'contain', position: 'absolute', width: '100%', height: '100%'}}/>
            </View>
            <Slot />
          </View>
        </ScrollView>
      </SafeAreaView>
  )
}

export default Layout