import {Alert, Image, ScrollView, TouchableOpacity, View} from "react-native";
import {ArrowLeftIcon} from "lucide-react-native";
import {router, useLocalSearchParams} from "expo-router";
import * as Yup from "yup";
import {useFormik} from "formik";
import PrimaryButton from "@/components/button/PrimaryButton";
import httpClient from "@/lib/http-client";
import CodeInput from "@/components/input/code-input";
import storage from "@/lib/storage";
import {useSession} from "@/hooks/auth/auth-context";

type CodeForm = {
  code: string,
  email: string
}

const CELL_COUNT = 6;

const CodePage = () => {

  const { signIn } = useSession()
  const { email } = useLocalSearchParams();
  const emailValue = (email ?? '') as string;

  const back = () => {
    router.back();
  }

  const codeScheme = Yup.object().shape({
    code: Yup.string().required('Código é obrigatório').min(6, 'Código imcompleto')
      .max(6, 'Código deve ter 6 dígitos')
  })

  const {
    handleSubmit,
    handleChange,
  } = useFormik<CodeForm>({
    validationSchema: codeScheme,
    initialValues: {
      code: '',
      email: emailValue,
    },
    onSubmit: async (values) => {
      await httpClient.post(values, '/auth/code').json(async (response: { token: string }) => {
        console.log(response)
        await signIn(response.token);
        router.push('/home')
      }).catch(error => {
        console.log(error)
        Alert.alert('Erro', 'Usuário ou senha inválidos')
      })
    }
  })

  const onChangeCode = (text: string) => {
    handleChange('code')(text)
    if (text.length === CELL_COUNT) {
      handleSubmit()
    }
  }

  return (
    <ScrollView style={{ flex: 1 }}>
      <View className="flex-1 h-screen p-8 pt-20" style={{ flex: 1 }}>
        <View>
          <TouchableOpacity onPress={back}>
            <ArrowLeftIcon className="text-salt-blue font-bold" size={28} />
          </TouchableOpacity>
        </View>
        <View className="w-full justify-center items-center">
          <View className="w-[200px] h-[133px] relative">
            <Image source={require('@/assets/logos/blue/saldaterra.png')}
                   style={{objectFit: 'contain', position: 'absolute', width: '100%', height: '100%'}}/>
          </View>
          <CodeInput onChange={onChangeCode} target={emailValue} />
          <PrimaryButton text={"Confirmar"} onPress={handleSubmit} className="mt-16" />
        </View>
      </View>
    </ScrollView>
  )
}

export default CodePage
