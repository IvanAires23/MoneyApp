import RNDateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { Alert, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Button from "../../components/Button";
import { categories } from "../../constants/categories";
import { colors } from "../../constants/colors";
import { globalStyles } from "../../styles/globalStyles";

export default function AddTransaction() {

    const initialForm = {
        description: "",
        value: 0,
        date: new Date(),
        category: "Renda"
    }

    const [form, setForm] = useState(initialForm)
    const [showPicker, setShowPicker] = useState(false)

    const addTransaction = () => {
        Alert.alert("Bom dia")
    }

    const handleDateChange = (e, selectDate) => {
        setShowPicker(false)

        if (selectDate) {
            setForm({ ...form, date: selectDate })
        }
    }

    const handleCurrencyChange = (text) => {
        const formattedValue = text.replace(/\D/g, "")
        const numberValue = formattedValue ? parseFloat(formattedValue) / 100 : 0;

        setForm({ ...form, value: numberValue })
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
                            value={form.value.toLocaleString("pt-BR", {
                                style: "currency",
                                currency: "BRL"
                            })}
                            onChangeText={handleCurrencyChange}
                            keyboardType="numeric"
                            style={globalStyles.input} />
                    </View>

                    <View>
                        <Text style={globalStyles.inputLabel}>Data</Text>
                        <TouchableOpacity onPress={() => setShowPicker(true)}>
                            <TextInput
                                value={form.date.toLocaleDateString()}
                                onChangeText={e => setForm({ ...form, date: e })}
                                style={globalStyles.input}
                                editable={false}
                            />

                            {showPicker && (
                                <RNDateTimePicker
                                    mode="date"
                                    display={Platform.OS == "ios" ? "inline" : "default"}
                                    value={form.date}
                                    onChange={handleDateChange}
                                />
                            )
                            }
                        </TouchableOpacity>

                    </View>

                    <View>
                        <Text>Categoria</Text>
                        {/*<TextInput
                            value={form.category}
                            onChangeText={e => setForm({ ...form, category: e })}
                            style={globalStyles.input} />*/}
                        <View style={style.picker}>
                            <Picker
                                selectedValue={form.category}
                                onValueChange={itemValue => setForm({ ...form, category: itemValue })}
                            >
                                <Picker.Item
                                    label={categories.income.displayName}
                                    value={categories.income.name}
                                />
                                <Picker.Item
                                    label={categories.food.displayName}
                                    value={categories.food.name}
                                />
                                <Picker.Item
                                    label={categories.education.displayName}
                                    value={categories.education.name}
                                />
                                <Picker.Item
                                    label={categories.house.displayName}
                                    value={categories.house.name}
                                />
                                <Picker.Item
                                    label={categories.travel.displayName}
                                    value={categories.travel.name}
                                />
                            </Picker>
                        </View>
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
    picker: {
        display: "flex",
        justifyContent: "center",
        height: 44,
        borderColor: colors.secondaryText,
        borderWidth: 1,
        borderRadius: 8,
        flexGrow: 1
    }
})