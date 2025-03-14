import { useState } from "react";
import { validateField } from "../utils/validateField";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export const useContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: validateField(name, value) });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isFormValid()) {
      setStatus("Por favor, corrige los errores en el formulario.");
      return;
    }

    try {
      const response = await fetch("https://formspree.io/f/mldjderv", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Mensaje enviado con éxito.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Error al enviar el mensaje.");
      }
    } catch {
      setStatus("Error de conexión.");
    }
  };

  const isFormValid = () => {
    const newErrors = {
      name: validateField("name", formData.name),
      email: validateField("email", formData.email),
      message: validateField("message", formData.message),
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error !== "");
  };

  return {
    formData,
    errors,
    status,
    handleChange,
    handleSubmit,
  };
};
