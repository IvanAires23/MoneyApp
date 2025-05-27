import { Picker } from "@react-native-picker/picker";
import { StyleSheet, Text, View } from "react-native";
import { categories } from "../constants/categories";
import { colors } from "../constants/colors";
import { globalStyles } from "../styles/globalStyles";

export default function CategoryPicker({ form, setForm }) {
    return (
        <View>
            <Text style={globalStyles.inputLabel}>Categoria</Text>
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
    )
}

const style = StyleSheet.create({
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