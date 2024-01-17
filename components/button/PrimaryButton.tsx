import {StyleProp, Text, TouchableOpacity, ViewStyle} from "react-native";

type Props = {
  text: string
  onPress?: () => void
  className?: string
  style?: StyleProp<ViewStyle>
}

const PrimaryButton = ({text, onPress, className, style}: Props) => {
  return (
    <TouchableOpacity style={style} onPress={onPress} className={`${className} w-full p-3 rounded-3xl bg-salt-blue my-3 shadow`}>
      <Text className="text-white font-bold text-center">{text}</Text>
    </TouchableOpacity>
  )
}

export default PrimaryButton
