import {Image, ScrollView, Text, View} from "react-native";
import Header from "@/components/header/header";
import MenuTabs from "@/components/menu-tabs/menu-tabs";
import SectionBackground from "@/components/section-background/section-background";
import Card from "@/components/card/card";
import {LucideArrowRight} from "lucide-react-native";

const Calendar = () => {
  return (
    <>
      <SectionBackground image={require('@/assets/images/cultos.jpeg')}>
        <Header transparency/>
        <View className="px-10 flex-row w-full justify-between">
          <View className="mb-8">
            <Text className="text-salt-gold text-3xl font-bold">Agenda</Text>
            <Text className="text-white">Saiba a programação da Sal da Terra</Text>
          </View>
        </View>
      </SectionBackground>
      <ScrollView className="p-6 z-[-1]">
        <View className="flex-col mb-8" style={{ gap: 24, zIndex: -1 }}>
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
                    <Text className="text-salt-gold text-lg">Culto de Domingo</Text>
                    <Text className="text-salt-blue text-xs">Todo domingo às <Text className="font-bold">19h00</Text></Text>
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
                    <Text className="text-salt-gold text-lg">Oração</Text>
                    <Text className="text-salt-blue text-xs">Toda terça-feira às <Text className="font-bold">19h30</Text></Text>
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
                    <Text className="text-salt-gold text-lg">Culto da Quarta</Text>
                    <Text className="text-salt-blue text-xs">Toda quarta-feira às <Text className="font-bold">19h30</Text></Text>
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
                    <Text className="text-salt-gold text-lg">Culto da Sexta</Text>
                    <Text className="text-salt-blue text-xs">Toda sexta-feira às <Text className="font-bold">19h30</Text></Text>
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
                    <Text className="text-salt-gold text-lg">Culto dos Jovens</Text>
                    <Text className="text-salt-blue text-xs">Todo sábado às <Text className="font-bold">19h30</Text></Text>
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

export default Calendar
