import {Text, View} from "react-native";
import DateTimePicker from "react-native-ui-datepicker";
import {TextInputProps} from "react-native/Libraries/Components/TextInput/TextInput";
import {useState} from "react";
import dayjs from "dayjs";

type Props = TextInputProps & {
  label?: string
  error?: string
  inputClassName?: string,
  touched?: boolean,
  mode?: 'single' | 'range' | 'multiple'
}

const DateInput = ({label, error, inputClassName, touched, mode = 'single', value, ...props}: Props) => {
  const [date, setDate] = useState(dayjs());
  const validationColor = !touched ? `border-salt-blue` : error ? `border-red-500` : `border-salt-blue`;
  const message = !touched ? '' : error ? error : '';

  return (
    <View className="w-full mb-4">
      <Text className="ml-2 mb-1">{label}</Text>
      <DateTimePicker mode={mode} date={date} onChange={(params: any) => setDate(params.date)} />
      {message && <Text className="text-red-500 text-sm ml-2">{message}</Text>}
    </View>
  )
}

export default DateInput
