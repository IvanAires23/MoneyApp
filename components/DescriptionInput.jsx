import { Text, TextInput, View } from "react-native";
import { globalStyles } from "../styles/globalStyles";

export default function DescriptionInput({ form, setForm, inputValueRef }) {
    return (
        <View>
            <Text style={globalStyles.inputLabel}>Descrição</Text>
            <TextInput
                value={form.description}
                onChangeText={e => setForm({ ...form, description: e })}
                style={globalStyles.input}
                returnKeyType="next"
                onSubmitEditing={() => inputValueRef.current.focus()}
            />
        </View>
    )
}