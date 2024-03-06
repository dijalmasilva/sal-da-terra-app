import {Alert, Modal, View} from "react-native";
import {useState} from "react";
import dayjs, {locale} from "dayjs";
import DateTimePicker from "react-native-ui-datepicker";
import Input from "@/components/input/Input";

type Props = {
  onChange?: (date: dayjs.Dayjs) => void
  mode?: 'single' | 'range' | 'multiple',
  error?: string,
  maxDate?: dayjs.Dayjs
  minDate?: dayjs.Dayjs
}

const ModalDateInput = ({onChange, mode = 'single', error, maxDate, minDate}: Props) => {
  const [visible, setVisible] = useState(false)
  const [date, setDate] = useState<dayjs.Dayjs | null>(null)

  const updateDate = (date: dayjs.Dayjs) => {
    if (onChange) {
      onChange(date)
    }

    setDate(date)
    setVisible(false)
  }

  return (
    <View className="w-full">
      <Input
        placeholder="01/01/1990"
        label="Data de nascimento"
        value={date?.format('DD/MM/YYYY')}
        error={error}
        onFocus={(e) => {
          e.preventDefault()
          setVisible(true)
        }}
      />
      <Modal
        animationType="slide"
        className="flex justify-center items-center w-full h-full bg-salt-blue"
        visible={visible}
        onRequestClose={() => {
          setVisible(!visible);
        }}>
        <View className="w-screen h-screen justify-center items-center p-8">
          <DateTimePicker
            locale={locale('pt-br')}
            mode={mode}
            date={date ?? dayjs()}
            onChange={(params: any) => updateDate(params.date)}
            maxDate={maxDate}
            minDate={minDate}
            selectedItemColor={'#183D5A'}
            headerButtonColor={'#183D5A'}
          />
        </View>
      </Modal>
    </View>
  )
}

export default ModalDateInput