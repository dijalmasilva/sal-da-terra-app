import {Image, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {ArrowLeftIcon} from "lucide-react-native";
import {router} from "expo-router";
import Input from "@/components/input/Input";
import * as Yup from "yup";
import {useFormik} from "formik";
import PrimaryButton from "@/components/button/PrimaryButton";

type LoginForm = {
  email: string,
  password: string,
}

const LoginPage = () => {

  const back = () => {
    router.back();
  }

  const loginScheme = Yup.object().shape({
    email: Yup.string().email('E-mail inválido.').required('E-mail é obrigatório'),
    password: Yup.string()
      .required('Senha é obrigatório')
      .min(6, 'No mínimo 6 caracteres')
      .max(18, 'No máximo 18 caracteres')
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
      password: ''
    },
    onSubmit: (values) => {
      if (values.email === 'dijalmacz@gmail.com') {
        router.push('/logged/home');
      }
    }
  })

  return (
    <ScrollView style={{ flex: 1 }} className="p-8 bg-salt-white">
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
          returnKeyType="next"
          returnKeyLabel="Próximo"

        />
        <Input
          placeholder={"*********"}
          label="Senha"
          secureTextEntry
          value={values.password}
          error={errors.password}
          onChangeText={handleChange('password')}
          onBlur={handleBlur('password')}
          touched={touched.password}
          autoComplete="password"
          autoCapitalize="none"
          keyboardAppearance="dark"
          returnKeyType="go"
          returnKeyLabel="go"
        />
        <PrimaryButton text={"Entrar"} onPress={handleSubmit} />
      </View>
    </ScrollView>
  )
}

export default LoginPage
