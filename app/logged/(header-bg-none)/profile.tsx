import {Image, ScrollView, Text, TouchableOpacity, View} from "react-native";
import Header from "@/components/header/header";
import MenuTabs from "@/components/menu-tabs/menu-tabs";
import SectionBackground from "@/components/section-background/section-background";
import Card from "@/components/card/card";
import {LucideHeart, LucideMessageCircle, LucideMoreVertical} from "lucide-react-native";

const Profile = () => {
  return (
    <>
      <SectionBackground image={require('@/assets/images/profile.jpeg')}>
        <Header transparency/>
        <View className="px-10 flex-row w-full justify-between">
          <View className="mt-8">
            <Text className="text-salt-gold text-3xl font-bold">Dijalma Silva</Text>
            <Text className="text-white max-w-[120px]">Pastor auxiliar</Text>
          </View>
          <View className="relative w-[120px] h-[120px] rounded-full mb-[-5px] shadow shadow-neutral-600">
            <Image source={require('@/assets/images/prdijalma.jpeg')}
                   style={{objectFit: 'contain', position: 'absolute', width: '100%', height: '100%', marginTop: 10}}
                   className="rounded-full"/>
          </View>
        </View>
      </SectionBackground>
      <ScrollView className="p-6">
        <Text className="text-xl font-bold">Atualizações</Text>
        <View className="mt-3 mb-9" style={{ gap: 24 }}>
          <Card>
            <View className="flex-row w-full" style={{gap: 10}}>
              <View className="relative w-[28px] h-[28px] rounded-full">
                <Image source={require('@/assets/images/prdijalma.jpeg')}
                       style={{objectFit: 'contain', position: 'absolute', width: '100%', height: '100%'}}
                       className="rounded-full"/>
              </View>
              <View className="flex-1" style={{gap: 10}}>
                <View className="flex-row justify-between">
                  <Text className="font-bold">Você destacou o versículo</Text>
                  <Text>1d</Text>
                </View>
                <View className="w-[250px]">
                  <Text>Pois, que grande nação tem um Deus tão próximo como o Senhor, o nosso Deus, sempre que o
                    invocamos?</Text>
                </View>
                <Text className="text-xs">DEUTERONÔMIO 4:7</Text>
                <View className="flex-row justify-between mt-3">
                  <View className="flex-row" style={{gap: 16}}>
                    <TouchableOpacity>
                      <LucideHeart className="text-black"/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <LucideMessageCircle className="text-black"/>
                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity>
                    <LucideMoreVertical className="text-black"/>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Card>
          <Card>
            <View className="flex-row w-full" style={{gap: 10}}>
              <View className="relative w-[28px] h-[28px] rounded-full">
                <Image source={require('@/assets/images/prdijalma.jpeg')}
                       style={{objectFit: 'contain', position: 'absolute', width: '100%', height: '100%'}}
                       className="rounded-full"/>
              </View>
              <View className="flex-1" style={{gap: 10}}>
                <View className="flex-row justify-between">
                  <Text className="font-bold">Você destacou o versículo</Text>
                  <Text>1d</Text>
                </View>
                <View className="w-[250px]">
                  <Text>Pois, que grande nação tem um Deus tão próximo como o Senhor, o nosso Deus, sempre que o
                    invocamos?</Text>
                </View>
                <Text className="text-xs">DEUTERONÔMIO 4:7</Text>
                <View className="flex-row justify-between mt-3">
                  <View className="flex-row" style={{gap: 16}}>
                    <TouchableOpacity>
                      <LucideHeart className="text-black"/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <LucideMessageCircle className="text-black"/>
                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity>
                    <LucideMoreVertical className="text-black"/>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Card>
          <Card>
            <View className="flex-row w-full" style={{gap: 10}}>
              <View className="relative w-[28px] h-[28px] rounded-full">
                <Image source={require('@/assets/images/prdijalma.jpeg')}
                       style={{objectFit: 'contain', position: 'absolute', width: '100%', height: '100%'}}
                       className="rounded-full"/>
              </View>
              <View className="flex-1" style={{gap: 10}}>
                <View className="flex-row justify-between">
                  <Text className="font-bold">Você destacou o versículo</Text>
                  <Text>1d</Text>
                </View>
                <View className="w-[250px]">
                  <Text>Pois, que grande nação tem um Deus tão próximo como o Senhor, o nosso Deus, sempre que o
                    invocamos?</Text>
                </View>
                <Text className="text-xs">DEUTERONÔMIO 4:7</Text>
                <View className="flex-row justify-between mt-3">
                  <View className="flex-row" style={{gap: 16}}>
                    <TouchableOpacity>
                      <LucideHeart className="text-black"/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <LucideMessageCircle className="text-black"/>
                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity>
                    <LucideMoreVertical className="text-black"/>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Card>
          <Card>
            <View className="flex-row w-full" style={{gap: 10}}>
              <View className="relative w-[28px] h-[28px] rounded-full">
                <Image source={require('@/assets/images/prdijalma.jpeg')}
                       style={{objectFit: 'contain', position: 'absolute', width: '100%', height: '100%'}}
                       className="rounded-full"/>
              </View>
              <View className="flex-1" style={{gap: 10}}>
                <View className="flex-row justify-between">
                  <Text className="font-bold">Você destacou o versículo</Text>
                  <Text>1d</Text>
                </View>
                <View className="w-[250px]">
                  <Text>Pois, que grande nação tem um Deus tão próximo como o Senhor, o nosso Deus, sempre que o
                    invocamos?</Text>
                </View>
                <Text className="text-xs">DEUTERONÔMIO 4:7</Text>
                <View className="flex-row justify-between mt-3">
                  <View className="flex-row" style={{gap: 16}}>
                    <TouchableOpacity>
                      <LucideHeart className="text-black"/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <LucideMessageCircle className="text-black"/>
                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity>
                    <LucideMoreVertical className="text-black"/>
                  </TouchableOpacity>
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

export default Profile