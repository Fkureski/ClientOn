"use client";

import Navbar from "@/components/Navbar";
import { useState } from "react";
import InputField from "@/components/InputField";

type FormData = { 
    email:string;
    password: string;
}

const LoginForm = () => {
    const[formData, setFormData] = useState<FormData>({
        email: "",
        password: "",
    })
}

const handleSubmit = async(e: React.
    FormEvent<HTMLFormElement>) => {
        e.preventDefault();
}