import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { authLoginApi, authSignUpApi, logoutApi } from "../api/authApi";
import { useDispatch } from "react-redux";
import { addUser, isLoding, setIsAuth, setToken } from "../state/authSlice";
import { addAllProducts } from "../../../shared/state/productSlice";
import { addAllProduct } from "../../cart/state/cartSlice";
import { useNavigate } from "react-router";

export const useAuth = () => {
    const dispatch  = useDispatch();
    const navigate = useNavigate()
    const [activeTab, setActiveTab] = useState("login"); // 'login' | 'register'
  const [showPassword, setShowPassword] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const [toastMsg, setToastMsg] = useState();

  // Initialize React Hook Form
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      mobile: "",
      password: "",
      promoCode: "",
      whatsappUpdates: true,
      loginEmail: "",
      loginPassword: "",
    },
    mode: "onChange",
  });

  const watchedPassword = watch("password", "");
  const watchedPromo = watch("promoCode", "");

  const passwordStrength = useMemo(() => {
    if (!watchedPassword) return 0;
    let score = 0;
    if (watchedPassword.length >= 6) score += 1;
    if (/[A-Z]/.test(watchedPassword)) score += 1; // test checks that given string match with regex pattern or not
    if (/[0-9]/.test(watchedPassword)) score += 1;
    if (/[^A-Za-z0-9]/.test(watchedPassword)) score += 1;
    return score;
  }, [watchedPassword]);

  const onSubmit = (data) => {
    // Simulated submission without window.alert
    setSubmittedData(data);
    setTimeout(() => {
      setSubmittedData(null);
    }, 4500);
  };

  const signUpHandle = async(data) => {
    dispatch(isLoding(true))
    try {
      const res = await authSignUpApi(data);

      console.log(res);
      dispatch(setToken(res.data.accessToken))
      dispatch(addUser(res.data.user))
      dispatch(isLoding(false))
    } catch (error) {
      console.log(error)
      dispatch(isLoding(false))
      alert("Something went wrong!")
    }
  };

  const loginHadle = async (data) => {
    dispatch(isLoding(true))
  try {
    const response = await authLoginApi(data);

    if (!response?.data) {
      throw new Error("Login response missing data");
    }
    const accessTokenData = response.data.accessToken
    const userData = response.data.user
    dispatch(addUser(userData));
    dispatch(setToken(accessTokenData));
  } catch (error) {
    console.log("Login error:", error);
    dispatch(isLoding(false))
    alert("Login failed");
  }
};

  const logoutHandle = async() => {
    try {
      await logoutApi();
      dispatch(addUser(null));
      dispatch(setToken(null));
      dispatch(setIsAuth(false));
      dispatch(addAllProducts(null));
      dispatch(addAllProduct(null));
      navigate('/login', { replace: true });
    } catch (error) {
      console.error("Logout failed:", error);
    }
  } 



  return {
    register,
    handleSubmit,
    watch,
    errors,
    isSubmitting,
    reset,
    activeTab,
    setActiveTab,
    showPassword,
    setShowPassword,
    submittedData,
    setSubmittedData,
    watchedPassword,
    watchedPromo,
    passwordStrength,
    onSubmit,
    toastMsg,
    setToastMsg,
    loginHadle,
    signUpHandle,
    logoutHandle
  };
};
