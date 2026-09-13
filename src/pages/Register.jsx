import { useState } from "react";
import "../index.css";
import {
  UserOutlined,
  EyeInvisibleFilled,
  EyeFilled,
  MailFilled,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { setLocalStorage, getLocalStorage } from "../utils/storage";

const CardBackground = ({ view }) => {
  const bgClass = view === "login" ? "register" : "login";

  return (
    <>
      <div className={`card-bg card-bg-1 ${bgClass}`}></div>
      <div className={`card-bg card-bg-2 ${bgClass}`}></div>
    </>
  );
};

const LoginForm = ({ view, toggleView }) => {
  const [visible, setVisible] = useState(false);
  const [formData, setFormData] = useState(() => {
    const savedData = getLocalStorage("formData");
    return (
      savedData || {
        email: "",
        password: "",
      }
    );
  });
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setLocalStorage("formData", formData);
    navigate("/home");
  };

  return (
    <div className={`form login ${view === "login" ? "active" : ""}`}>
      <form onSubmit={handleLogin}>
        <h2>Login</h2>
        <div className="flex flex-row items-center">
          <input
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            placeholder="Email"
          />
          <MailFilled className="relative -left-5" />
        </div>
        <div className="flex flex-row">
          <input
            type={visible ? "text" : "password"}
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            placeholder="Password"
          />
          {visible ? (
            <EyeFilled
              className="relative -left-5"
              onClick={() => setVisible(!visible)}
            />
          ) : (
            <EyeInvisibleFilled
              className="relative -left-5"
              onClick={() => setVisible(!visible)}
            />
          )}
        </div>
        <button>LOGIN</button>
        <a onClick={toggleView}>
          Don't have an account? <em>Register here</em>
        </a>
      </form>
    </div>
  );
};

const RegisterForm = ({ view, toggleView }) => {
  const [visible, setVisible] = useState(false);
  const [formData, setFormData] = useState(() => {
    const savedData = getLocalStorage("formData");
    return (
      savedData || {
        name: "",
        email: "",
        password: "",
      }
    );
  });
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setLocalStorage("formData", formData);

    navigate("/home");
  };
  return (
    <div className={`form register ${view === "register" ? "active" : ""}`}>
      <form onSubmit={handleLogin}>
        <h2>Register</h2>
        <div className="flex flex-row items-center">
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Full Name"
          />
          <UserOutlined className="relative -left-5" />
        </div>
        <div className="flex flex-row items-center">
          <input
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            placeholder="Email"
          />
          <MailFilled className="relative -left-5" />
        </div>
        <div className="flex flex-row items-center">
          <input
            type={visible ? "text" : "password"}
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            placeholder="Password"
          />
          {visible ? (
            <EyeFilled
              className="relative -left-5"
              onClick={() => setVisible(!visible)}
            />
          ) : (
            <EyeInvisibleFilled
              className="relative -left-5"
              onClick={() => setVisible(!visible)}
            />
          )}
        </div>
        <button>REGISTER</button>
        <a onClick={toggleView}>
          Already have an account? <em>Login here</em>
        </a>
      </form>
    </div>
  );
};

export const Signup1 = () => {
  const [view, setView] = useState("login");

  const toggleView = () => setView(view === "login" ? "register" : "login");

  return (
    <section className="page signup-1-page">
      <div className="signup-1-card">
        <CardBackground view={view} />
        <LoginForm view={view} toggleView={toggleView} />
        <RegisterForm view={view} toggleView={toggleView} />
      </div>
    </section>
  );
};
