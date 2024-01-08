import {Text, View} from "react-native";
import Input from "@/components/input/Input";
import {useFormik} from "formik";
import Button from "@/components/button/Button";
import * as Yup from 'yup';

type RegisterForm = {
  fullName: string
  email: string,
  password: string,
  phone: string,
}

const RegisterPage = () => {
  const registerSchema = Yup.object().shape({
    email: Yup.string().email('E-mail inválido.').required('E-mail é obrigatório'),
    fullName: Yup.string().required('Nome completo é obrigatório'),
    phone: Yup.string().required('Telefone é obrigatório')
      // regex that match with this (99) 99999-9999
      .matches(/^\(\d{2}\)\s\d{5}-\d{4}$/, 'Telefone inválido'),
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
  } = useFormik<RegisterForm>({
    validationSchema: registerSchema,
    initialValues: {
      fullName: '',
      email: '',
      phone: '',
      password: ''
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
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

  return (
    <View className="w-full items-center">
      <Text className="text-2xl font-bold mt-4 text-salt-blue">Faça seu cadastro</Text>
      <View className="mt-8 w-full max-w-xs items-start">
        <Input
          placeholder={"Nome"}
          label="Nome completo"
          value={values.fullName}
          error={errors.fullName}
          onChangeText={handleChange('fullName')}
          onBlur={handleBlur('fullName')}
          touched={touched.fullName}
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
        <Button className="bg-salt-blue text-salt-white" text="Cadastrar" onPress={handleSubmit} />
      </View>
    </View>
  )
}

export default RegisterPage
