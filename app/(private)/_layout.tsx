import {useSession} from "@/hooks/auth/auth-context";
import {Image, Text, View} from "react-native";
import {Redirect, Slot, usePathname} from "expo-router";

const LoggedLayout = () => {
  const { user, isLoading } = useSession()
  const currentPath = usePathname();
  console.log(currentPath);
  console.log('private layout')
  console.log(user)

  if (isLoading) {
    return (
      <View className="w-screen h-screen justify-center items-center">
        <View className="w-[200px] h-[133px] relative">
          <Image source={require('@/assets/logos/blue/saldaterra.png')}
                 style={{objectFit: 'contain', position: 'absolute', width: '100%', height: '100%'}}/>
        </View>
        <Text className="text-xl text-center mt-8">Carregando...</Text>
      </View>
    )
  }

  if (!user) {
    return (
      <Redirect href="/login" />
    )
  }

  if (user && !user.name && currentPath !== '/register') {
    return (
      <Redirect href="/register" />
    )
  }

  return <Slot />
}

export default LoggedLayout;
