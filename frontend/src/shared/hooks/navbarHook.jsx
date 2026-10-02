import { useState } from "react";
import { useSelector } from "react-redux";
import { useAuth } from "../../features/auth/hooks/authHook";

const useNav = () => {
    const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cart } = useSelector((store) => store.cart);
  const totalItems = cart?.length ?? 0;
  const {logoutHandle} = useAuth()
  
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Product", path: "/products" },
    { name: "Upload", path: "/seller" },
  ];


  return {
    isOpen,
    setIsOpen,
    scrolled,
    isCartOpen,
    setIsCartOpen,
    navLinks,
    cart, 
    totalItems,
    logoutHandle
  }
}

export default useNav