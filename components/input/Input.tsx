import {Text, TextInput, View} from "react-native";
import {TextInputProps} from "react-native/Libraries/Components/TextInput/TextInput";

type Props = TextInputProps & {
  label?: string
  error?: string
  inputClassName?: string,
  touched?: boolean
}

const Input = ({label, error, inputClassName, touched, ...props}: Props) => {
  const validationColor = !touched ? `border-salt-blue` : error ? `border-red-500` : `border-salt-blue`;
  const message = !touched ? '' : error ? error : '';

  return (
    <View className="w-full mb-4">
      <Text className="ml-2 mb-1">{label}</Text>
      <TextInput className={`w-full p-3 border-[1px] rounded-lg ${validationColor} ${inputClassName}`} {...props} />
      {message && <Text className="text-red-500 text-sm ml-2">{message}</Text>}
    </View>
  )
}

export default Input
