import {Text, TouchableOpacity} from "react-native";

type Props = {
  text: string
  onPress?: () => void
}

const Button = ({text, onPress}: Props) => {
  return (
    <TouchableOpacity onPress={onPress} className="w-full p-3 rounded-3xl bg-white my-3">
      <Text className="text-salt-blue text-center">{text}</Text>
    </TouchableOpacity>
  )
}

export default Button
