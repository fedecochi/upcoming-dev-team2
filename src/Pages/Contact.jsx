import React, { useState } from "react";
import { Box, TextField, Button, Typography, Paper } from "@mui/material";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setStatus("Please fill all fields.");
      return;
    }

    // ✅ For now, show a success message (visitor form)
    setStatus("✅ Message sent! We'll get back to you soon.");

    // Clear fields
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f5f5f5",
        p: 3,
      }}
    >
      <Paper
        sx={{
          p: 4,
          width: { xs: "95%", sm: "60%", md: "40%" },
          borderRadius: "16px",
        }}
        elevation={8}
      >
        <Typography variant="h4" fontWeight="bold" sx={{ mb: 2 }}>
          Contact Us
        </Typography>

        <Typography sx={{ mb: 3, color: "text.secondary" }}>
          Got a question or need support? Send us a message.
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            label="Full Name"
            fullWidth
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            sx={{ mb: 2 }}
          />

          <TextField
            label="Email Address"
            fullWidth
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ mb: 2 }}
          />

          <TextField
            label="Message"
            fullWidth
            required
            multiline
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            sx={{ mb: 3 }}
          />

          <Button
  type="submit"
  variant="contained"
  fullWidth
  sx={{
    py: 1.2,
    borderRadius: "12px",
    backgroundColor: "#7B3F00",
    "&:hover": {
      backgroundColor: "#5e2f00",
    },
  }}
>
  Send Message
</Button>


          {status && (
            <Typography sx={{ mt: 2, color: "green" }}>{status}</Typography>
          )}
        </form>
      </Paper>
    </Box>
  );
};

export default Contact;