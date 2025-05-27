import { useRef, useState } from "react";
import { Alert, Keyboard, KeyboardAvoidingView, ScrollView, StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import Button from "../../components/Button";
import CategoryPicker from "../../components/CategoryPicker";
import CurrencyInput from "../../components/CurrencyInput";
import DataPicker from "../../components/DataPicker";
import DescriptionInput from "../../components/DescriptionInput";
import { globalStyles } from "../../styles/globalStyles";

export default function AddTransaction() {

    const initialForm = {
        description: "",
        value: 0,
        date: new Date(),
        category: "Renda"
    }

    const [form, setForm] = useState(initialForm)
    const inputValueRef = useRef()

    const addTransaction = () => {
        Alert.alert("Bom dia")
    }



    return (
        <KeyboardAvoidingView style={globalStyles.screenContainer}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <ScrollView style={globalStyles.content}>
                    <View style={style.form}>

                        <DescriptionInput form={form} setForm={setForm} inputValueRef={inputValueRef} />

                        <CurrencyInput form={form} setForm={setForm} inputValueRef={inputValueRef} />

                        <DataPicker form={form} setForm={setForm} />

                        <CategoryPicker form={form} setForm={setForm} />

                    </View>
                    <Button onPress={addTransaction}>Adicionar</Button>
                </ScrollView>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

const style = StyleSheet.create({
    form: {
        gap: 12,
        marginBottom: 40,
        marginTop: 10
    },
})