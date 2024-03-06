import {ScrollView, Text, TouchableOpacity, View} from "react-native";
import Header from "@/components/header/header";
import MenuTabs from "@/components/menu-tabs/menu-tabs";
import {LucideVolume2, LucideZoomIn, LucideZoomOut} from "lucide-react-native";
import BibleUtils, {VersionsType} from "@/utils/bible";
import {useState} from "react";
import ModalBibleVersion from "@/components/modal/modal-bible-version/modal-bible-version";

const sizes = ['text-md', 'text-lg', 'text-xl', 'text-2xl', 'text-3xl', 'text-4xl']

const Bible = () => {
  const [modalVersion, setModalVersion] = useState(false)
  const [currentSize, setCurrentSize] = useState(1);
  const [bibleVersion, setBibleVersion] = useState<VersionsType>('nvi')
  const chapters = BibleUtils.getChapter('dt', 4, bibleVersion)

  const hasNextSize = currentSize < sizes.length - 1
  const haxPreviousSize = currentSize > 0

  const increaseSize = () => {
    if (hasNextSize) {
      setCurrentSize(currentSize + 1)
    }
  }

  const decreaseSize = () => {
    if (haxPreviousSize) {
      setCurrentSize(currentSize - 1)
    }
  }

  const onChangeBibleVersion = (version: VersionsType) => {
    setBibleVersion(version)
  }

  return (
    <>
      <ModalBibleVersion actualVersion={bibleVersion} visible={modalVersion} setVisible={setModalVersion}
                         onSelect={onChangeBibleVersion}/>
      <View>
        <Header transparency hiddenIcons/>
        <View className="flex-row px-8 pt-8 pb-4 justify-between">
          <View className="flex-row" style={{gap: 16}}>
            <View className="flex-row" style={{gap: 1}}>
              <TouchableOpacity className="bg-[#d9d9d9] rounded-l-2xl">
                <Text className="uppercase p-1 pl-3 pr-2 text-xs">Deuteronômio 4</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setModalVersion(true)} className="bg-[#d9d9d9] rounded-r-2xl ">
                <Text className="uppercase p-1 pr-3 pl-2 text-xs">{bibleVersion}</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity>
              <LucideVolume2 className="text-black"/>
            </TouchableOpacity>
          </View>
          <View className="flex-row" style={{gap: 16}}>
            <TouchableOpacity onPress={increaseSize}>
              <LucideZoomIn className={`${hasNextSize ? 'opacity-100' : 'opacity-50'} text-black`}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={decreaseSize}>
              <LucideZoomOut className={`${haxPreviousSize ? 'opacity-100' : 'opacity-50'} text-black`}/>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView className="px-8" style={{flex: 1}}>
        <View className="flex-col" style={{gap: 8}}>
          {
            chapters.map((chapter, index) => {
              const chapterNumber = `${index + 1}`

              return (
                <View key={`verse-${chapterNumber}`} className="flex-row items-start" style={{gap: 6}}>
                  <Text className={`font-bold ${sizes[currentSize]}`}>{chapterNumber}</Text>
                  <Text
                    className={`text-salt-blue w-full break-all break-words pr-6 ${sizes[currentSize]}`}>{chapter}</Text>
                </View>
              )
            })
          }
        </View>
      </ScrollView>
      <MenuTabs/>
    </>
  )
}

export default Bible