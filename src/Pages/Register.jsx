import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  CircularProgress,
} from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const RegistrationScreen = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const payload = { firstName, lastName, email, password, address, phoneNumber };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await axios.post(
        "https://fullstack-student-backend.onrender.com/api/auth",
        payload
      );
      console.log(res);
      navigate("/login");
    } catch (error) {
      console.error(error.response?.data?.error);
      setError(error.response?.data?.error || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #f7d9e3, #d3c0f9, #b1e5f2)",
        p: 2,
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Paper
          elevation={8}
          sx={{
            p: 4,
            width: { xs: "90vw", sm: 420 },
            borderRadius: "20px",
            background: "rgba(255, 255, 255, 0.9)",
            backdropFilter: "blur(8px)",
            boxShadow: "0 12px 35px rgba(175, 150, 255, 0.3)",
          }}
        >
          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{
              mb: 3,
              color: error ? "red" : "#5e35b1",
              textAlign: "center",
            }}
          >
            {error ? error : "Create Account"}
          </Typography>

          <form onSubmit={handleRegister}>
            <TextField
              fullWidth
              label="First Name"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              sx={{
                mb: 2,
                "& label.Mui-focused": { color: "#a26bfa" },
                "& .MuiOutlinedInput-root.Mui-focused fieldset": {
                  borderColor: "#a26bfa",
                },
              }}
              required
            />

            <TextField
              fullWidth
              label="Last Name"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              sx={{
                mb: 2,
                "& label.Mui-focused": { color: "#a26bfa" },
                "& .MuiOutlinedInput-root.Mui-focused fieldset": {
                  borderColor: "#a26bfa",
                },
              }}
              required
            />

            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{
                mb: 2,
                "& label.Mui-focused": { color: "#a26bfa" },
                "& .MuiOutlinedInput-root.Mui-focused fieldset": {
                  borderColor: "#a26bfa",
                },
              }}
              required
            />

            <TextField
              fullWidth
              label="Password"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{
                mb: 2,
                "& label.Mui-focused": { color: "#a26bfa" },
                "& .MuiOutlinedInput-root.Mui-focused fieldset": {
                  borderColor: "#a26bfa",
                },
              }}
              required
            />

            <TextField
              fullWidth
              label="Phone Number"
              name="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              sx={{
                mb: 2,
                "& label.Mui-focused": { color: "#a26bfa" },
                "& .MuiOutlinedInput-root.Mui-focused fieldset": {
                  borderColor: "#a26bfa",
                },
              }}
            />

            <TextField
              fullWidth
              label="Address"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              sx={{
                mb: 3,
                "& label.Mui-focused": { color: "#a26bfa" },
                "& .MuiOutlinedInput-root.Mui-focused fieldset": {
                  borderColor: "#a26bfa",
                },
              }}
            />

            <Button
              fullWidth
              type="submit"
              variant="contained"
              sx={{
                py: 1.4,
                fontWeight: "bold",
                borderRadius: "12px",
                textTransform: "none",
                fontSize: "1rem",
                background: "linear-gradient(135deg, #a26bfa, #3f2833ff)",
                boxShadow: "0 8px 30px rgba(162, 107, 250, 0.4)",
                "&:hover": {
                  background: "linear-gradient(135deg, #7b52d3, #2b1921ff)",
                },
              }}
            >
              {loading ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                "Register"
              )}
            </Button>
          </form>

          <Typography
            variant="body2"
            sx={{ mt: 3, textAlign: "center", color: "text.secondary" }}
          >
            Already have an account?{" "}
            <a
              href="/login"
              style={{
                color: "#a26bfa",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Login
            </a>
          </Typography>
        </Paper>
      </motion.div>
    </Box>
  );
};

export default RegistrationScreen;
