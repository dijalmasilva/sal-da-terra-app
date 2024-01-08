import {StatusBar} from 'expo-status-bar';
import {Image, Text, View} from 'react-native';
import Button from "@/components/button/Button";
import {useRouter} from "expo-router";

const IndexPage = () => {
  const router = useRouter();

  const createAccount = () => {
    router.push('register');
  }

  const login = () => {
    router.push('login');
  }

  return (
    <View className="flex-1 bg-salt-blue items-center justify-center">
      <View className="w-[244px] h-[163px] relative">
        <Image source={require('@/assets/logos/white/saldaterra.png')}
               style={{objectFit: 'contain', position: 'absolute', width: '100%', height: '100%'}}/>
      </View>
      <View className="gap-0 items-center mt-3">
        <Text className="text-salt-gold text-xl font-bold mt-4">Iluminando vidas,</Text>
        <Text className="text-salt-gold text-xl font-bold mt-4">saborizando o mundo</Text>
      </View>
      <View className="items-center mt-16 w-full max-w-xs">
        <Button text="Entre" onPress={createAccount} />
        <Button text="Crie sua conta" onPress={login} />
      </View>
      <StatusBar style="inverted" />
    </View>
  );
}

export default IndexPage;
