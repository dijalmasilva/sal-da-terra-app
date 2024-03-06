import {Image, ScrollView, Text, View} from "react-native";
import Header from "@/components/header/header";
import SectionBackground from "@/components/section-background/section-background";
import MenuTabs from "@/components/menu-tabs/menu-tabs";
import Card from "@/components/card/card";
import {LucideArrowRight} from "lucide-react-native";

const Contributed = () => {
  return (
    <>
      <SectionBackground image={require('@/assets/images/contribuicoes.jpeg')}>
        <Header transparency/>
        <View className="px-10 flex-row w-full justify-between">
          <View className="mb-8">
            <Text className="text-salt-gold text-3xl font-bold">Contribuições</Text>
            <Text className="text-white">Contribua com a Sal da Terra e colabore com a expansão
              do Evangelho!</Text>
          </View>
        </View>
      </SectionBackground>
      <ScrollView className="p-6 z-[-1]">
        <View className="flex-col mb-8" style={{ gap: 24 }}>
          <Card padding={0}>
            <View className="flex-row" style={{gap: 16}}>
              <View className="w-[140px] h-[100px] relative ml-[-30px]">
                <Image source={require('@/assets/images/profile.jpeg')}
                       style={{
                         objectFit: 'cover',
                         position: 'absolute',
                         width: '100%',
                         height: '100%',
                         borderTopRightRadius: 50,
                         borderBottomRightRadius: 50,
                       }}
                />
              </View>
              <View className="flex-1 py-2 pr-4 flex-row justify-between" style={{ gap: 16 }}>
                <View className="flex-col justify-between flex-1">
                  <View>
                    <Text className="text-salt-gold text-lg">Oferta</Text>
                    <Text className="text-salt-blue text-xs">As ofertas permite ajudar pessoas que necessitam de suprimentos</Text>
                  </View>
                  <Text className="text-xs">Clique e saiba mais</Text>
                </View>
                <View>
                  <LucideArrowRight className="text-salt-blue"/>
                </View>
              </View>
            </View>
          </Card>
          <Card padding={0}>
            <View className="flex-row" style={{gap: 16}}>
              <View className="w-[140px] h-[100px] relative ml-[-30px]">
                <Image source={require('@/assets/images/profile.jpeg')}
                       style={{
                         objectFit: 'cover',
                         position: 'absolute',
                         width: '100%',
                         height: '100%',
                         borderTopRightRadius: 50,
                         borderBottomRightRadius: 50,
                       }}
                />
              </View>
              <View className="flex-1 py-2 pr-4 flex-row justify-between" style={{ gap: 16 }}>
                <View className="flex-col justify-between flex-1">
                  <View>
                    <Text className="text-salt-gold text-lg">Dízimo</Text>
                    <Text className="text-salt-blue text-xs">O dízimo ajuda-nos a manter o ambiente limpo e aconchegável</Text>
                  </View>
                  <Text className="text-xs">Clique e saiba mais</Text>
                </View>
                <View>
                  <LucideArrowRight className="text-salt-blue"/>
                </View>
              </View>
            </View>
          </Card>
          <Card padding={0}>
            <View className="flex-row" style={{gap: 16}}>
              <View className="w-[140px] h-[100px] relative ml-[-30px]">
                <Image source={require('@/assets/images/profile.jpeg')}
                       style={{
                         objectFit: 'cover',
                         position: 'absolute',
                         width: '100%',
                         height: '100%',
                         borderTopRightRadius: 50,
                         borderBottomRightRadius: 50,
                       }}
                />
              </View>
              <View className="flex-1 py-2 pr-4 flex-row justify-between" style={{ gap: 16 }}>
                <View className="flex-col justify-between flex-1">
                  <View>
                    <Text className="text-salt-gold text-lg">Prímicias</Text>
                    <Text className="text-salt-blue text-xs">Abençoe pessoas com suas prímicias</Text>
                  </View>
                  <Text className="text-xs">Clique e saiba mais</Text>
                </View>
                <View>
                  <LucideArrowRight className="text-salt-blue"/>
                </View>
              </View>
            </View>
          </Card>
          <Card padding={0}>
            <View className="flex-row" style={{gap: 16}}>
              <View className="w-[140px] h-[100px] relative ml-[-30px]">
                <Image source={require('@/assets/images/profile.jpeg')}
                       style={{
                         objectFit: 'cover',
                         position: 'absolute',
                         width: '100%',
                         height: '100%',
                         borderTopRightRadius: 50,
                         borderBottomRightRadius: 50,
                       }}
                />
              </View>
              <View className="flex-1 py-2 pr-4 flex-row justify-between" style={{ gap: 16 }}>
                <View className="flex-col justify-between flex-1">
                  <View>
                    <Text className="text-salt-gold text-lg">Votos</Text>
                    <Text className="text-salt-blue text-xs">Sua fidelidade com Deus não tem preço</Text>
                  </View>
                  <Text className="text-xs">Clique e saiba mais</Text>
                </View>
                <View>
                  <LucideArrowRight className="text-salt-blue"/>
                </View>
              </View>
            </View>
          </Card>
        </View>
      </ScrollView>
      <MenuTabs/>
    </>
  )
}

export default Contributed