import {Text, TouchableOpacity} from "react-native";

type Props = {
  text: string
  onPress?: () => void
  className?: string
}

const Button = ({text, onPress, className}: Props) => {
  return (
    <TouchableOpacity onPress={onPress} className={`w-full p-3 rounded-3xl bg-white my-3 ${className}`}>
      <Text className="text-salt-blue text-center">{text}</Text>
    </TouchableOpacity>
  )
}

export default Button
