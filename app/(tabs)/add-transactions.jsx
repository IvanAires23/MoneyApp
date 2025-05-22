import { useState } from "react";
import { Alert, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import Button from "../../components/Button";
import { globalStyles } from "../../styles/globalStyles";

export default function AddTransaction() {

    const initialForm = {
        description: "",
        value: 0,
        date: "",
        category: "Renda"
    }

    const [form, setForm] = useState(initialForm)

    const addTransaction = () => {
        Alert.alert("Bom dia")
    }

    return (
        <View style={globalStyles.screenContainer}>
            <ScrollView style={globalStyles.content}>
                <View style={style.form}>
                    <View>
                        <Text>Descrição</Text>
                        <TextInput
                            value={form.description}
                            onChangeText={e => setForm({ ...form, description: e })}
                            style={globalStyles.input} />
                    </View>

                    <View>
                        <Text>Valor</Text>
                        <TextInput
                            value={form.value}
                            onChangeText={e => setForm({ ...form, value: e })}
                            keyboardType="numeric"
                            style={globalStyles.input} />
                    </View>

                    <View>
                        <Text>Data</Text>
                        <TextInput
                            value={form.date}
                            onChangeText={e => setForm({ ...form, date: e })}
                            style={globalStyles.input} />
                    </View>

                    <View>
                        <Text>Categoria</Text>
                        <TextInput
                            value={form.category}
                            onChangeText={e => setForm({ ...form, category: e })}
                            style={globalStyles.input} />
                    </View>
                </View>

                <Button onPress={addTransaction}>Adicionar</Button>
            </ScrollView>
        </View>
    )
}

const style = StyleSheet.create({
    form: {
        gap: 12,
        marginBottom: 40,
        marginTop: 10
    },

})