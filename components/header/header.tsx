import {Image, View} from "react-native";
import {LucideBell, LucideMenu, LucideSearch} from "lucide-react-native";

type Props = {
  transparency?: boolean
}

const Header = ({transparency = false}: Props) => {
  return (
    <View
      className={`flex-row px-3 pt-1 justify-between items-center w-full ${transparency ? 'bg-none' : 'bg-salt-blue'}`}>
      <View className="flex-1">
        <LucideMenu className="text-salt-gold" size={36}/>
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
      <View className="flex-row gap-2 items-center justify-end flex-1">
        <LucideBell className="text-white" size={20}/>
        <LucideSearch className="text-white" size={20}/>
        <View className="w-[32px] h-[32px] relative rounded-3xl items-center justify-center bg-white">
          <Image source={require('@/assets/images/jesus.png')}
                 style={{objectFit: 'contain', position: 'absolute', width: '100%', height: '100%'}}
                 className="rounded-3xl"/>
        </View>
      </View>
    </View>
  )
}

export default Header
