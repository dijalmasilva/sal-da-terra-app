import {Alert, Image, Modal, Text, TouchableOpacity, View} from "react-native";
import {VersionsType} from "@/utils/bible";

type Props = {
  visible: boolean
  setVisible: (visible: boolean) => void
  onSelect: (version: VersionsType) => void
  actualVersion: VersionsType
}

const ModalBibleVersion = ({visible, setVisible, onSelect, actualVersion}: Props) => {
  const onPressVersion = (version: VersionsType) => {
    onSelect(version)
    setVisible(false)
  }

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setVisible(!visible);
      }}>
      <View className="w-screen h-screen justify-center items-center p-8 bg-salt-blue">
        <View className="flex-col h-screen w-full items-center">
          <View className="flex-col items-start flex-1 justify-center" style={{gap: 16}}>
            <TouchableOpacity onPress={() => onPressVersion('aa')}>
              <Text className={`${actualVersion === 'aa' ? 'text-salt-gold' : 'text-white'} text-center text-2xl`}>AA -
                Almeida Atualiza</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onPressVersion('acf')}>
              <Text className={`${actualVersion === 'acf' ? 'text-salt-gold' : 'text-white'} text-center text-2xl`}>ACF
                - Almeida Corrigida</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onPressVersion('arc')}>
              <Text className={`${actualVersion === 'arc' ? 'text-salt-gold' : 'text-white'} text-center text-2xl`}>ARC
                - Almeida Atualiza</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onPressVersion('kja')}>
              <Text className={`${actualVersion === 'kja' ? 'text-salt-gold' : 'text-white'} text-center text-2xl`}>KJA
                - King James Atualizada</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onPressVersion('nvi')}>
              <Text className={`${actualVersion === 'nvi' ? 'text-salt-gold' : 'text-white'} text-center text-2xl`}>NVI
                - Nova Versão Internacional</Text>
            </TouchableOpacity>
          </View>
          <View className="w-[244px] h-[163px] relative mb-2">
            <Image source={require('@/assets/logos/white/saldaterra.png')}
                   style={{objectFit: 'contain', position: 'absolute', width: '100%', height: '100%'}}/>
          </View>
        </View>
      </View>
    </Modal>
  )
}

export default ModalBibleVersion