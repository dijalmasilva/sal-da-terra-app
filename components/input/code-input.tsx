import {View, StyleSheet, Text, ScrollView, SafeAreaView} from "react-native";
import {CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell} from "react-native-confirmation-code-field";
import {useState} from "react";

const CELL_COUNT = 6;

type Props = {
  target: string
  onChange: (value: string) => void
  error?: string
}

const CodeInput = ({ onChange, target, error }: Props) => {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const onChangeValue = (newValue: string) => {
    onChange(newValue)
    setValue(newValue)
  }

  return (
    <View>
      <Text className="text-xl mt-16 text-center">Insira o código enviado para <Text className="font-bold">{`\n${target}`}</Text></Text>
      <CodeField
        ref={ref}
        {...props}
        // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
        value={value}
        onChangeText={onChangeValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}) => (
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />
      {error && <Text className="text-red-500 text-sm ml-2 text-center">{error}</Text>}
    </View>
  )
}

const styles = StyleSheet.create({
  root: {flex: 1, padding: 20},
  codeFieldRoot: {marginTop: 20},
  cell: {
    width: 50,
    height: 50,
    lineHeight: 54,
    fontSize: 36,
    borderWidth: 2,
    borderColor: '#183D5A70',
    marginHorizontal: 2,
    borderRadius: 8,
    textAlign: 'center',
  },
  focusCell: {
    borderColor: '#BF9461',
    color: '#BF9461'
  },
});

export default CodeInput;
