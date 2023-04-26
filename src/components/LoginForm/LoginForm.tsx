import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import useAdmin from "../../hooks/useAdmin/useAdmin";
import LoginFormStyled from "./LoginFormStyled";
import HubIcon from "@mui/icons-material/Hub";

const LoginForm = (): JSX.Element => {
  const intialFormData = {
    username: "",
    password: "",
  };
  const [initialForm, setData] = useState(intialFormData);
  const { adminLogin } = useAdmin();
  const handleFormChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setData({
      ...initialForm,
      [event.target.id]: event.target.value,
    });
  };
  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const formDataToSubmit = {
      username: initialForm.username,
      password: initialForm.password,
    };
    console.log(formDataToSubmit);
    await adminLogin(formDataToSubmit);
  };
  return (
    <LoginFormStyled>
      <HubIcon
        sx={{ fontSize: "4rem", color: "primary.light" }}
        aria-hidden="false"
        aria-label="USB Platform icon"
      />
      <Typography
        variant="h2"
        sx={{
          fontSize: {
            xxl: "2rem",
            xl: "2rem",
            lg: "2rem",
            md: "2rem",
            sm: "2rem",
            xs: "2rem",
          },
          fontWeight: "700",
          textAlign: "center",
          pt: "0.5rem",
          pb: "1rem",
          color: "#fff",
        }}
      >
        USB Platform
      </Typography>
      <Box
        className="form-box"
        sx={{
          marginTop: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          border: "1px solid #80808052",
          borderRadius: "5px",
          pl: "1rem",
          pr: "1rem",
          backgroundColor: "#fff",
        }}
      >
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{ mt: "1rem", mb: "1rem", ml: "1rem", mr: "1rem" }}
        >
          <TextField
            className="input-field"
            margin="normal"
            required
            fullWidth
            error={
              initialForm.username.length < 4 && initialForm.username !== ""
            }
            helperText={"This field is required"}
            id="username"
            label="Username"
            aria-label="username"
            name="username"
            onChange={handleFormChange}
            autoComplete="off"
          />
          <TextField
            className="input-field"
            margin="normal"
            required
            aria-label="Password"
            error={
              initialForm.password.length < 4 && initialForm.password !== ""
            }
            helperText={"This field is required"}
            fullWidth
            name="password"
            onChange={handleFormChange}
            label="Password"
            type="password"
            id="password"
            autoComplete="off"
          />
          <Button
            className="submit-button"
            type="submit"
            disableRipple
            fullWidth
            variant="contained"
            sx={{
              mt: "1rem",
              mb: "1rem",
              height: "50px",
              fontSize: "1rem",
            }}
          >
            Log in
          </Button>
        </Box>
      </Box>
      <div></div>
    </LoginFormStyled>
  );
};

export default LoginForm;
