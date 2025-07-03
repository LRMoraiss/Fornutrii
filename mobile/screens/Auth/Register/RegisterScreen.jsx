import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import api from "../../../services/api";
import { styles } from "./RegisterScreen.styles";

export default function RegisterScreen() {
  const [form, setForm] = useState({
    id: "",
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    userType: "patient",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    if (isSuccess) {
      navigation.reset({
        index: 0,
        routes: [{ name: "Login" }],
      });
    }
  }, [isSuccess, navigation]);

  const isValidEmailDomain = (email) => {
    const allowedDomains = [
      "gmail.com",
      "hotmail.com",
      "outlook.com",
      "yahoo.com",
    ];
    const domain = email.split("@")[1];
    return allowedDomains.includes(domain);
  };

  const isStrongPassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    return regex.test(password);
  };

  const handleRegister = async () => {
    const newErrors = {};

    if (!form.name) newErrors.name = true;
    if (!form.email) {
      newErrors.email = true;
    } else if (!isValidEmailDomain(form.email)) {
      newErrors.email = true;
      Alert.alert(
        "Erro no Email",
        "O email deve ser dos domínios: gmail, hotmail, outlook ou yahoo."
      );
    }

    if (!form.password) {
      newErrors.password = true;
    } else if (!isStrongPassword(form.password)) {
      newErrors.password = true;
      Alert.alert(
        "Senha fraca",
        "A senha deve ter pelo menos 8 caracteres, incluindo letra maiúscula, minúscula, número e caractere especial."
      );
    }

    if (!form.confirmPassword) {
      newErrors.confirmPassword = true;
    } else if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = true;
      Alert.alert("Erro", "As senhas não coincidem");
    }

    if (!form.id) newErrors.id = true;

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    try {
      const response = await api.post("/usuario", {
        id: form.id,
        nome: form.name,
        email: form.email,
        senha: form.password,
        papel: form.userType,
      });

      if (response.status === 201 || response.status === 200) {
        console.log("Cadastro bem sucedido - setIsSuccess será chamado");
        setIsSuccess(true);
        Alert.alert(
          "Sucesso",
          "Cadastro realizado com sucesso!",
          [
            {
              text: "OK",
              onPress: () => {
                navigation.navigate("Login");
              },
            },
          ],
          { cancelable: false }
        );
      }
    } catch (error) {
      console.error("Erro no cadastro:", error.response?.data || error.message);
      Alert.alert(
        "Erro",
        error.response?.data?.message ||
          "Ocorreu um erro no cadastro. Tente novamente."
      );
    }
  };

  const userTypes = [
    { label: "Paciente", value: "patient" },
    { label: "Nutricionista", value: "nutritionist" },
    { label: "Educador Físico", value: "trainer" },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro no ForNutri</Text>

      <TextInput
        style={[styles.input, errors.id && styles.inputError]}
        placeholder="CPF"
        value={form.id}
        onChangeText={(text) => setForm({ ...form, id: text })}
      />

      <TextInput
        style={[styles.input, errors.name && styles.inputError]}
        placeholder="Nome completo"
        value={form.name}
        onChangeText={(text) => setForm({ ...form, name: text })}
      />

      <TextInput
        style={[styles.input, errors.email && styles.inputError]}
        placeholder="Email"
        value={form.email}
        onChangeText={(text) => setForm({ ...form, email: text })}
        keyboardType="email-address"
      />
      <Text style={styles.infoText}>
        Aceitamos apenas emails @gmail.com, @hotmail.com, @outlook.com e
        @yahoo.com
      </Text>

      <View style={styles.passwordContainer}>
        <TextInput
          style={[
            styles.input,
            styles.passwordInput,
            errors.password && styles.inputError,
          ]}
          placeholder="Senha"
          value={form.password}
          onChangeText={(text) => setForm({ ...form, password: text })}
          secureTextEntry={!showPassword}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Ionicons
            name={showPassword ? "eye" : "eye-off"}
            size={24}
            color="gray"
          />
        </TouchableOpacity>
      </View>

      <Text style={styles.infoText}>
        A senha deve ter pelo menos 8 caracteres, incluindo:
        {"\n"}- 1 letra maiúscula
        {"\n"}- 1 letra minúscula
        {"\n"}- 1 número
        {"\n"}- 1 caractere especial
      </Text>

      <View style={styles.passwordContainer}>
        <TextInput
          style={[
            styles.input,
            styles.passwordInput,
            errors.confirmPassword && styles.inputError,
          ]}
          placeholder="Confirmar Senha"
          value={form.confirmPassword}
          onChangeText={(text) => setForm({ ...form, confirmPassword: text })}
          secureTextEntry={!showConfirmPassword}
        />
        <TouchableOpacity
          onPress={() => setShowConfirmPassword(!showConfirmPassword)}
        >
          <Ionicons
            name={showConfirmPassword ? "eye" : "eye-off"}
            size={24}
            color="gray"
          />
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>Tipo de Usuário</Text>

      <View style={styles.userTypeContainer}>
        {userTypes.map((type) => (
          <TouchableOpacity
            key={type.value}
            style={[
              styles.userTypeButton,
              form.userType === type.value && styles.selectedUserType,
            ]}
            onPress={() => setForm({ ...form, userType: type.value })}
          >
            <Text style={styles.userTypeText}>{type.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.primaryButton} onPress={handleRegister}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={styles.secondaryButtonText}>Já tem conta? Faça login</Text>
      </TouchableOpacity>
    </View>
  );
}

