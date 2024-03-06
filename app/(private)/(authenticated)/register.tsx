import {Image, ScrollView, Text, TouchableOpacity, View} from "react-native";
import Input from "@/components/input/Input";
import {useFormik} from "formik";
import * as Yup from 'yup';
import {ArrowLeftIcon} from "lucide-react-native";
import {router} from "expo-router";
import PrimaryButton from "@/components/button/PrimaryButton";
import ModalDateInput from "@/components/modal/modal-date-input/modal-date-input";
import dayjs, {Dayjs} from "dayjs";
import httpClient from "@/lib/http-client";
import {useSession} from "@/hooks/auth/auth-context";

type RegisterForm = {
  name: string
  phone: string,
  birthdate?: Date | null
}

const RegisterPage = () => {
  const { signOut, signIn, token } = useSession()

  const registerSchema = Yup.object().shape({
    name: Yup.string().required('Nome completo é obrigatório'),
    phone: Yup.string().required('Telefone é obrigatório')
      // regex that match with this (99) 99999-9999
      .matches(/^\(\d{2}\)\s\d{5}-\d{4}$/, 'Telefone inválido'),
    birthdate: Yup.date().required('Data de nascimento é obrigatório'),
  })

  const {
    handleSubmit,
    errors,
    values,
    handleChange,
    handleBlur,
    touched
  } = useFormik<RegisterForm>({
    validationSchema: registerSchema,
    initialValues: {
      name: '',
      phone: '',
      birthdate: null,
    },
    onSubmit: (values) => {
      const resultValues = {
        ...values,
        birthdate: dayjs(values.birthdate).toDate(),
      }
      httpClient.auth(`Bearer ${token}`).post(resultValues, `/user/profile/complete`).json(async response => {
        await signIn(response.token)
        router.push('/home')
      }).catch(err => {
        alert(`Erro ao cadastrar: ${err}`)
      })
    }
  })

  const onChangePhone = (text: string) => {
    const result = text
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .replace(/(-\d{4})\d+?$/, '$1');
    handleChange('phone')(result);
  }

  const onChangeBirthDate = (date: Dayjs) => {
    handleChange('birthdate')(date.format('YYYY-MM-DD'));
  }

  const back = async () => {
    await signOut();
    router.push('/')
  }

  return (
    <ScrollView style={{flex: 1}} className="p-8 pt-20 bg-salt-white">
      <View className="w-full items-center">
        <View className="w-full items-start">
          <TouchableOpacity onPress={back}>
            <ArrowLeftIcon className="text-salt-blue font-bold" size={28} />
          </TouchableOpacity>
        </View>
        <View className="w-[200px] h-[133px] relative">
          <Image source={require('@/assets/logos/blue/saldaterra.png')}
                 style={{objectFit: 'contain', position: 'absolute', width: '100%', height: '100%'}}/>
        </View>
        <Text className="text-2xl font-bold mt-4 text-salt-blue">Faça seu cadastro</Text>
        <View className="mt-8 w-full max-w-xs items-start">
          <Input
            placeholder={"Nome"}
            label="Nome completo"
            value={values.name}
            error={errors.name}
            onChangeText={handleChange('name')}
            onBlur={handleBlur('name')}
            touched={touched.name}
            autoComplete="name"
            autoCapitalize="words"
            keyboardType="default"
            returnKeyType="next"
            returnKeyLabel="Próximo"
          />
          <Input
            placeholder={"(99) 99999999"}
            label="Número do celular"
            value={values.phone}
            error={errors.phone}
            onChangeText={onChangePhone}
            onBlur={handleBlur('phone')}
            touched={touched.phone}
            keyboardType="number-pad"
            returnKeyType="next"
            returnKeyLabel="Próximo"
            autoComplete="tel-device"
          />
          <ModalDateInput
            onChange={onChangeBirthDate}
            error={errors.birthdate}
            minDate={dayjs().subtract(120, 'year')}
            maxDate={dayjs()}
          />
          <PrimaryButton text="Cadastrar" onPress={handleSubmit}/>
        </View>
      </View>
    </ScrollView>
  )
}

export default RegisterPage
