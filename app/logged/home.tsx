import {Image, ImageBackground, Platform, ScrollView, Text, View} from "react-native";
import Header from "@/components/header/header";
import {StatusBar} from "expo-status-bar";
import PrimaryButton from "@/components/button/PrimaryButton";
import MenuTabs from "@/components/menu-tabs/menu-tabs";

const HomeLogged = () => {
  return (
    <>
      <View style={{flex: 1}} className="bg-salt-white">
        <Header/>
        <ScrollView>
          <View className="p-6">
            <View>
              <Text className="text-salt-gold text-2xl">Bem-vindo,</Text>
              <Text className="text-salt-gold text-2xl">somos a <Text className="font-bold">Sal da Terra</Text>.</Text>
            </View>
            <View className="w-full h-[250px] mt-8">
              <ImageBackground source={require('@/assets/images/programation.png')} resizeMode="contain" style={{
                flex: 1,
                width: '100%',
                height: '100%',
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}>
                <PrimaryButton text={"Programação da Sal"} style={{maxWidth: 200}}/>
              </ImageBackground>
            </View>
            <View className="mt-8">
              <Text className="text-salt-blue text-lg font-bold">Mensagem da semana</Text>
            </View>
            <View className="w-full h-[250px] relative mt-6">
              <Image source={require('@/assets/images/programation.png')}
                     style={{objectFit: 'contain', position: 'absolute', width: '100%', height: '100%'}}/>
            </View>
            <View className="mt-8">
              <PrimaryButton text="Como chegar a Sal da Terra"/>
            </View>
          </View>
        </ScrollView>
        <MenuTabs/>
      </View>
      <StatusBar backgroundColor="#183D5A" style={Platform.OS !== 'ios' ? 'inverted' : 'auto'}/>
    </>
  )
}

export default HomeLogged