import { createContext } from "react";

// 定义AuthContext接口
interface AuthContextType {
  isAuthenticated: boolean;
  userName: string;
  login: (name: string) => void;
  logout: () => void;
}

// 创建AuthContext并设置默认值
export const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  userName: "",
  login: () => {},
  logout: () => {},
});