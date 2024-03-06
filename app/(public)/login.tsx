import {Alert, Image, SafeAreaView, ScrollView, TouchableOpacity, View} from "react-native";
import {ArrowLeftIcon} from "lucide-react-native";
import {router} from "expo-router";
import Input from "@/components/input/Input";
import * as Yup from "yup";
import {useFormik} from "formik";
import PrimaryButton from "@/components/button/PrimaryButton";
import httpClient from "@/lib/http-client";

type LoginForm = {
  email: string,
}

const LoginPage = () => {

  const back = () => {
    router.back();
  }

  const loginScheme = Yup.object().shape({
    email: Yup.string().email('E-mail inválido.').required('E-mail é obrigatório'),
  })

  const {
    handleSubmit,
    errors,
    values,
    handleChange,
    handleBlur,
    touched
  } = useFormik<LoginForm>({
    validationSchema: loginScheme,
    initialValues: {
      email: '',
    },
    onSubmit: (values) => {
      httpClient.post(values, '/auth/sign-in').json(response => {
        alert(JSON.stringify(response, null, 2))
        router.push({pathname: '/code', params: {email: values.email}});
      }).catch(error => {
        console.log(error)
        Alert.alert('Erro', 'Usuário ou senha inválidos')
      })
    }
  })

  return (
    <ScrollView style={{ flex: 1 }}>
      <View className="flex-1 h-screen p-8 pt-20" style={{flex: 1}}>
        <View>
          <TouchableOpacity onPress={back}>
            <ArrowLeftIcon className="text-salt-blue font-bold" size={28}/>
          </TouchableOpacity>
        </View>
        <View className="w-full justify-center items-center flex-1 pb-20">
          <View className="w-[200px] h-[133px] relative">
            <Image source={require('@/assets/logos/blue/saldaterra.png')}
                   style={{objectFit: 'contain', position: 'absolute', width: '100%', height: '100%'}}/>
          </View>
          <Input
            placeholder={"example@mail.com"}
            label="E-mail"
            value={values.email}
            error={errors.email}
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            touched={touched.email}
            autoCapitalize="none"
            autoComplete="email"
            keyboardType="email-address"
            returnKeyType="done"
            returnKeyLabel="Entrar"

          />
          <PrimaryButton text={"Entrar"} onPress={handleSubmit}/>
        </View>
      </View>
    </ScrollView>
  )
}

export default LoginPage
