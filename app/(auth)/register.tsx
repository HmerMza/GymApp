import { Button, ButtonText } from "@/components/ui/button";
import { Input, InputField } from "@/components/ui/input";

import React, { useState } from "react";
import { Alert, StyleSheet, View } from "react-native";

import { signUpWithEmail } from "@/api/auth/singUp";
import { Link } from "expo-router";

export default function RegisterScreen() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignUp = async () => {
    const error = await signUpWithEmail(
      email,
      password,
      name,
      lastName,
      setLoading
    );
    if (error) Alert.alert(error);
  };

  return (
    <View style={styles.container}>
      <View style={[styles.verticallySpaced, styles.mt20]}>
        <Input>
          <InputField
            placeholder="Your Name"
            value={name}
            onChangeText={setName}
          />
        </Input>
      </View>
      <View style={[styles.verticallySpaced]}>
        <Input>
          <InputField
            placeholder="Your Last Name"
            value={lastName}
            onChangeText={setLastName}
          />
        </Input>
      </View>
      <View style={[styles.verticallySpaced]}>
        <Input>
          <InputField
            placeholder="email@address.com"
            value={email}
            onChangeText={setEmail}
          />
        </Input>
      </View>
      <View style={styles.verticallySpaced}>
        <Input>
          <InputField
            placeholder="password"
            value={password}
            onChangeText={setPassword}
            type="password"
          />
        </Input>
      </View>
      <View style={[styles.verticallySpaced, styles.mt20]}>
        <Button disabled={loading} onPress={handleSignUp}>
          <ButtonText>Sign Up</ButtonText>
        </Button>
      </View>
      <View style={styles.verticallySpaced}>
        <Link href="/(tabs)">Ya tienes Cuenta?, inicia sesión</Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    padding: 12,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  verticallySpaced: {
    paddingTop: 4,
    paddingBottom: 4,
    alignSelf: "stretch",
  },
  mt20: {
    marginTop: 20,
  },
});
