import {ImageBackground, View} from "react-native";
import {ImageSourcePropType} from "react-native/Libraries/Image/Image";

type Props = {
  children: React.ReactNode
  className?: string
  image: ImageSourcePropType
}

const SectionBackground = ({
  children,
  className,
  image,
}: Props) => {
  return (
    <View className="w-screen min-h-[255px] relative bg-red-500">
      <ImageBackground source={image} resizeMode="cover" style={{ flex: 1 }}>
        <View className="absolute w-full h-full bg-salt-blue opacity-70" />
        <View className={`w-full h-full justify-between ${className}`}>
          {children}
        </View>
      </ImageBackground>
    </View>
  )
}

export default SectionBackground
