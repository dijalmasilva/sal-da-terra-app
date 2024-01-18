import {View} from "react-native";

type Props = {
  children: React.ReactNode
  className?: string,
  padding?: number
}

const Card = ({ children, className, padding = 16 }: Props) => {
  return (
    <View className={`${className} rounded-2xl relative bg-white overflow-hidden`} style={{ padding }}>
      {children}
    </View>
  )
}

export default Card