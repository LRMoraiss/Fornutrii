import React, { useState } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { styles } from "./RegistroRefeicaoScreen.styles";
import { colors } from "../../../constants/theme";

export default function RegistroRefeicaoScreen() {
  const navigation = useNavigation();

  const [alimento, setAlimento] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [calorias, setCalorias] = useState("");
  const [data, setData] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || data;
    setShowDatePicker(Platform.OS === "ios");
    setData(currentDate);
  };

  const handleSalvar = () => {
    // Aqui você salva no backend ou AsyncStorage
    console.log({
      alimento,
      quantidade,
      calorias,
      data: data.toISOString(),
    });
    navigation.goBack();
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Registrar Refeição</Text>

        <Text style={styles.label}>Alimento</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: Arroz integral"
          value={alimento}
          onChangeText={setAlimento}
        />

        <Text style={styles.label}>Quantidade (g ou ml)</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: 200"
          keyboardType="numeric"
          value={quantidade}
          onChangeText={setQuantidade}
        />

        <Text style={styles.label}>Calorias (kcal)</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: 350"
          keyboardType="numeric"
          value={calorias}
          onChangeText={setCalorias}
        />

        <Text style={styles.label}>Data da Refeição</Text>
        <TouchableOpacity
          style={styles.dateButton}
          onPress={() => setShowDatePicker(true)}
        >
          <Ionicons name="calendar-outline" size={20} color={colors.white} />
          <Text style={styles.dateButtonText}>{data.toLocaleDateString()}</Text>
        </TouchableOpacity>

        {showDatePicker && (
          <DateTimePicker
            value={data}
            mode="date"
            display="default"
            onChange={handleDateChange}
          />
        )}

        <TouchableOpacity style={styles.saveButton} onPress={handleSalvar}>
          <Text style={styles.buttonText}>Salvar Refeição</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.cancelButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>Cancelar</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
