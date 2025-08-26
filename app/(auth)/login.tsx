import { Button, ButtonText } from "@/components/ui/button";
import { Input, InputField } from "@/components/ui/input";

import React, { useState } from "react";
import { Alert, StyleSheet, View } from "react-native";

import { signInWithEmail } from "@/api/auth/singIn";
import { Link } from "expo-router";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignIn = async () => {
    const error = await signInWithEmail(email, password, setLoading);
    if (error) Alert.alert(error);
  };

  return (
    <View style={styles.container}>
      <View style={[styles.verticallySpaced, styles.mt20]}>
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
        <Button disabled={loading} onPress={handleSignIn}>
          <ButtonText>Sign In</ButtonText>
        </Button>
      </View>
      <View style={styles.verticallySpaced}>
        <Link href="/(auth)/register">No tienes Cuenta?, registraste</Link>
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
