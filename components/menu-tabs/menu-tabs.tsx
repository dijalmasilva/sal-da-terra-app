import {Text, TouchableOpacity, View} from "react-native";
import {LucideBook, LucideCalendar, LucideHeart, LucideHome} from "lucide-react-native";
import {router, usePathname} from "expo-router";
import {ElementType} from "react";

type MenuTabItemProps = {
  icon: ElementType
  text: string
  onClick: () => void
  active?: boolean
}

const MenuTabItem = ({icon: Icon, text, onClick, active}: MenuTabItemProps) => {
  return (
    <TouchableOpacity className={`items-center px-3 py-2 rounded ${active ? 'bg-salt-gold' : ''}`} style={{gap: 2}}
                      onPress={onClick}>
      <Icon className={`text-salt-blue ${active ? 'text-salt-white' : ''}`}/>
      <Text className={`font-bold ${active ? 'text-salt-white' : ''}`}>{text}</Text>
    </TouchableOpacity>
  )
}

const MenuTabs = () => {
  const pathname = usePathname();

  const onClick = (route: string) => {
    router.push(route);
  }

  return (
    <View className="px-4 mb-2 bg-none" style={{zIndex: -1}}>
      <View className="bg-white rounded-xl flex-row justify-center" style={{gap: 8}}>
        <MenuTabItem icon={LucideHome} text={"Início"} onClick={() => onClick('/home')} active={pathname === '/home'}/>
        <MenuTabItem icon={LucideCalendar} text={"Agenda"} onClick={() => onClick('/calendar')}
                     active={pathname === '/calendar'}/>
        <MenuTabItem icon={LucideHeart} text={"Contribua"} onClick={() => onClick('/contributed')}
                     active={pathname === '/contributed'}/>
        <MenuTabItem icon={LucideBook} text={"Bíblia"} onClick={() => onClick('/bible')}
                     active={pathname === '/bible'}/>
      </View>
    </View>
  )
}

export default MenuTabs