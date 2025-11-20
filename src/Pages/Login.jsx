import { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  InputAdornment,
  IconButton,
  CircularProgress,
} from "@mui/material";
import { Visibility, VisibilityOff, LockOutlined } from "@mui/icons-material";
import { motion } from "framer-motion";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const loginLogic = async () => {
    setLoading(true);
    setError("");

    try {
      const { data } = await axios.post(
        "https://fullstack-student-backend.onrender.com/api/auth/login",
        { email, password }
      );
      console.log(data);
      navigate("/");
    } catch (error) {
      console.error(error.response?.data?.error);
      setError(error.response?.data?.error || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #f7d9e3, #d3c0f9, #b1e5f2)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        p: 2,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Paper
          elevation={8}
          sx={{
            p: { xs: 4, sm: 5 },
            width: { xs: "90%", sm: 400 },
            borderRadius: "20px",
            textAlign: "center",
            background: "rgba(255, 255, 255, 0.9)",
            backdropFilter: "blur(6px)",
            boxShadow: "0 12px 35px rgba(175, 150, 255, 0.3)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {/* Lock Icon */}
          <Box
            sx={{
              width: 80,
              height: 80,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #a26bfa, #ff6fb5)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mx: "auto",
              mb: 2,
              boxShadow: "0 6px 25px rgba(162, 107, 250, 0.4)",
            }}
          >
            <LockOutlined sx={{ fontSize: 40, color: "#fff" }} />
          </Box>

          {/* Title */}
          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{ mb: 3, color: error ? "red" : "#5e35b1" }}
          >
            {error ? error : "Welcome Back!"}
          </Typography>

          {/* Email Input */}
          <TextField
            fullWidth
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            variant="outlined"
            sx={{
              mb: 2,
              "& .MuiOutlinedInput-root": {
                borderRadius: "12px",
              },
              "& label.Mui-focused": {
                color: "#a26bfa",
              },
              "& .MuiOutlinedInput-root.Mui-focused fieldset": {
                borderColor: "#a26bfa",
              },
            }}
          />

          {/* Password Input */}
          <TextField
            fullWidth
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type={showPassword ? "text" : "password"}
            variant="outlined"
            sx={{
              mb: 3,
              "& .MuiOutlinedInput-root": {
                borderRadius: "12px",
              },
              "& label.Mui-focused": {
                color: "#a26bfa",
              },
              "& .MuiOutlinedInput-root.Mui-focused fieldset": {
                borderColor: "#a26bfa",
              },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          {/* Login Button */}
          <Button
            fullWidth
            variant="contained"
            size="large"
            onClick={loginLogic}
            sx={{
              py: 1.4,
              fontWeight: "bold",
              borderRadius: "12px",
              textTransform: "none",
              fontSize: "1rem",
              background: "linear-gradient(135deg, #a26bfa, #1d0b14ff)",
              boxShadow: "0 8px 30px rgba(162, 107, 250, 0.4)",
              "&:hover": {
                background: "linear-gradient(135deg, #7b52d3, #1a0c12ff)",
              },
            }}
          >
            {loading ? <CircularProgress size={24} color="inherit" /> : "Login"}
          </Button>

          {/* Footer Text */}
          <Typography
            variant="body2"
            sx={{ mt: 3, color: "text.secondary", textAlign: "center" }}
          >
            Don’t have an account?{" "}
            <a
              href="/register"
              style={{
                color: "#a26bfa",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Sign up
            </a>
          </Typography>
        </Paper>
      </motion.div>
    </Box>
  );
};

export default Login;
