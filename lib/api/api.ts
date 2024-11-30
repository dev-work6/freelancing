import { User } from "@/types/file";
import { toast } from "sonner";

interface LoginCredentials {
  email: string;
  password: string;
}

interface RegisterCredentials extends LoginCredentials {
  name: string;
}

export async function login(
  credentials: LoginCredentials
): Promise<{ user: User }> {
  try {
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
      credentials: "include",
    });

    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.error || "Failed to login");
    }

    const data = await res.json();

    localStorage.setItem("authToken", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));
    toast.success("Logged in successfully");
    return data;
  } catch (error) {
    toast.error(error instanceof Error ? error.message : "Failed to login");
    throw error;
  }
}

export async function register(
  credentials: RegisterCredentials
): Promise<{ user: User }> {
  try {
    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
      credentials: "include",
    });

    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.error || "Failed to register");
    }

    const data = await res.json();
    localStorage.setItem("authToken", data.token);
    toast.success("Registered successfully");
    return data;
  } catch (error) {
    toast.error(error instanceof Error ? error.message : "Failed to register");
    throw error;
  }
}

export async function getCurrentUser(): Promise<{ user: User }> {
  try {
    const authToken = localStorage.getItem("authToken");
    const res = await fetch("/api/auth/me", {
      credentials: "include",
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch user");
    }

    return res.json();
  } catch (error) {
    toast.error(
      error instanceof Error ? error.message : "Failed to fetch user"
    );
    throw error;
  }
}

export const handleLogout = (setIsLoggedIn: (value: boolean) => void) => {
  localStorage.removeItem("user");
  localStorage.removeItem("authToken");
  setIsLoggedIn(false);
  window.location.href = "/";
};