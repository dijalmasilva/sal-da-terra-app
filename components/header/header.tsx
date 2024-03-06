import {Image, TouchableOpacity, View} from "react-native";
import {LucideBell, LucideMenu, LucideSearch} from "lucide-react-native";
import {router} from "expo-router";
import {useState} from "react";
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';
import Drawer from "@/components/drawer/drawer";

type Props = {
  transparency?: boolean
  hiddenIcons?: boolean
}

const Header = ({transparency = false, hiddenIcons = false}: Props) => {

  const [showDrawer, setShowDrawer] = useState<boolean>(false)

  const goToProfile = () => {
    router.push('/profile')
  }

  return (
    <View>
      <Drawer changeVisibility={setShowDrawer} visibility={showDrawer} />
      <View
        className={`flex-row px-3 pt-2 justify-between items-center w-full ${transparency ? 'bg-none' : 'bg-salt-blue'}`}>
        <View className="flex-1">
          <TouchableOpacity onPress={() => setShowDrawer(!showDrawer)}>
            <LucideMenu className="text-salt-gold" size={36} />
          </TouchableOpacity>
        </View>
        {
          !transparency && (
            <View className="flex-1 items-center">
              <View className="w-[49px] h-[49px] relative mr-2">
                <Image source={require('@/assets/logos/min-white/saldaterra.png')}
                       style={{objectFit: 'contain', position: 'absolute', width: '100%', height: '100%'}}/>
              </View>
            </View>
          )
        }
        <View className="flex-row items-center justify-end flex-1" style={{ gap: 12 }}>
          {
            !hiddenIcons && (
              <>
                <LucideBell className="text-white" size={20}/>
                <LucideSearch className="text-white" size={20}/>
              </>
            )
          }
          <TouchableOpacity onPress={goToProfile} className="w-[32px] h-[32px] relative rounded-full items-center justify-center bg-white">
            <Image source={require('@/assets/images/prdijalma.jpeg')}
                   style={{objectFit: 'contain', position: 'absolute', width: '100%', height: '100%'}}
                   className="rounded-full"/>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Header
