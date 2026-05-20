import api from "./api";
import { Platform } from "react-native";

export async function cadastro(data) {

  const formData = new FormData();

  formData.append('nome', data.nomeCompleto);
  formData.append('email', data.email);
  formData.append('genero', data.genero);
  formData.append('senha', data.senha);
  formData.append('data', data.dataNascimento);
  formData.append('peso', data.peso);
  formData.append('altura', data.altura);

  if (data.foto_perfil) {
    // WEB
    if (Platform.OS === "web") {
      const response = await fetch(data.foto_perfil);
      const blob = await response.blob();

      formData.append("foto", blob, "foto.jpg");
    } else {
      // MOBILE
      const filename = data.foto_perfil.split("/").pop();

      const match = /\.(\w+)$/.exec(filename);

      const type = match ? `image/${match[1]}` : "image/jpeg";

      formData.append("foto", {
        uri: data.foto_perfil,
        name: filename,
        type,
      });
    }
  }

  // const response = await api.post("/register", data);

  // return response.data;

  try {
    const response = await fetch("http://localhost:8000/api/register", {
      method: "POST",
      body: formData,
    });

    const json = await response.json();
    console.log("✅ Resposta:", JSON.stringify(json, null, 2));
    return json;
  } catch (error) {
    console.log("❌ Erro fetch:", error.message);
    throw error;
  }
}


export async function login(login, senha) {

  const response = await api.post("/login", {
    login,
    senha
  });

  return response.data;
}

export async function getPerfil() {

  const response = await api.get("/perfil");

  return response.data.user;

}

export async function logout() {

  const response = await api.post("/logout");

  return response.data;

}


export async function patchPerfil(data) {

  const response = await api.patch("/update", data);

  return response.data.user;

}

export async function deleteConta() {
  const response = await api.delete("/delete");
  return response.data;
}