import Animated, {Easing, useAnimatedStyle, useSharedValue, withTiming} from "react-native-reanimated";
import {Dimensions, Image, Pressable, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {ElementType, useEffect} from "react";
import {LucideBook, LucideCalendar, LucideHeart, LucideHome} from "lucide-react-native";
import {router, usePathname} from "expo-router";

type Props = {
  visibility?: boolean
  changeVisibility: (value: boolean) => void
}

const duration = 300;

type ItemDrawerProps = {
  icon: ElementType
  text: string
  onClick: () => void
  active?: boolean
}

const ItemDrawer = ({icon: Icon, text, onClick, active}: ItemDrawerProps) => {
  return (
    <TouchableOpacity
      className={`flex-row items-center py-3 px-6 ${active ? 'rounded-3xl bg-salt-gold text-salt-white' : ''}`}
      style={{gap: 18}} onPress={onClick}>
      <Icon className={`text-black ${active ? 'text-salt-white' : ''}`} size={24}/>
      <Text className={`text-black font-bold text-xl ${active ? 'text-salt-white' : ''}`}>{text}</Text>
    </TouchableOpacity>
  )
}

const Drawer = ({changeVisibility, visibility = false}: Props) => {

  const pathname = usePathname();
  console.log(pathname)
  const deviceWidth80Percent = Dimensions.get('screen').width * 0.8;
  const translateX = useSharedValue(-deviceWidth80Percent);

  useEffect(() => {
    translateX.value = visibility ? withTiming(0, {
      duration,
      easing: Easing.inOut(Easing.quad)
    }) : withTiming(-deviceWidth80Percent, {
      duration,
      easing: Easing.inOut(Easing.quad)
    });
  }, [visibility, translateX, deviceWidth80Percent]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: translateX.value}],
    };
  });

  const onClick = (route: string) => {
    router.push(route);
  }

  return (
    <View className={`w-full z-50 h-screen absolute ${visibility ? 'block' : 'hidden'} duration-500`}>
      <Pressable className="w-full z-0 h-screen top-0 left-0 mt-1" onPress={() => changeVisibility(false)}
                 style={{backgroundColor: '#00000090'}}/>
      <Animated.View style={[{
        flex: 1,
        width: deviceWidth80Percent > 400 ? 400 : deviceWidth80Percent, // 80% da largura da tela ou 400px
        height: Dimensions.get('screen').height,
        backgroundColor: '#FFF',
        position: 'absolute',
        shadowColor: '#000',
      }, animatedStyle]}>
        <ScrollView className="flex-1 p-4" style={{ flex: 1}}>
          <View className="flex-1 justify-between h-screen">
            <View>
              <Text className="text-salt-blue text-2xl">Menu</Text>
              <View className="flex flex-col mt-8" style={{gap: 8}}>
                <ItemDrawer icon={LucideHome} text="Início" onClick={() => onClick('/home')} active={pathname === '/home'}/>
                <ItemDrawer icon={LucideCalendar} text="Agenda" onClick={() => onClick('/calendar')} active={pathname === '/calendar'}/>
                <ItemDrawer icon={LucideHeart} text="Contribuir" onClick={() => onClick('/contributed')} active={pathname === '/contributed'}/>
                <ItemDrawer icon={LucideBook} text="Bíblia" onClick={() => onClick('/bible')} active={pathname === '/bible'}/>
              </View>
            </View>
            <View className="flex-1 justify-end">
              <View className="items-center">
                <View className="w-[150px] h-[150px] relative mr-2">
                  <Image source={require('@/assets/logos/blue/saldaterra.png')}
                         style={{objectFit: 'contain', position: 'absolute', width: '100%', height: '100%'}}/>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </Animated.View>
    </View>
  )
}

export default Drawer
