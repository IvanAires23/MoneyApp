import { Platform, Text, TextInput, TouchableOpacity, View } from "react-native";
import { globalStyles } from "../styles/globalStyles";

import RNDateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";

export default function DataPicker({ setForm, form }) {

    const [showPicker, setShowPicker] = useState(false)

    const handleDateChange = (e, selectDate) => {
        setShowPicker(false)

        if (selectDate) {
            setForm({ ...form, date: selectDate })
        }
    }

    return (
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
    )
}