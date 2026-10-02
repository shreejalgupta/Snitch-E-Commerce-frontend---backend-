import api from "../../../app/api/api";

export const authLoginApi = async ({ loginEmail, loginPassword }) => {
  try {
    const res = await api.post("/auth/login", {
      email: loginEmail.trim(),
      password: loginPassword.trim(),
    });

    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const authSignUpApi = async (data) => {
  try {
    const res = await api.post("/auth/register", {
      name: data.fullName,
      email: data.email,
      password: data.password,
    });

    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const logoutApi = async () => {
  const res = await api.post('/auth/logout');
  return res.data;
};
