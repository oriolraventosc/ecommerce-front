import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useAppSelector } from "../../redux/hooks";
import useUser from "../../hooks/useUser/useUser";
import CheckoutFormStyled from "./CheckoutFormStyled";

const CheckoutForm = (): JSX.Element => {
  const intialFormData = {
    name: "",
    email: "",
    pendingProducts: [],
    creditCardNumber: "",
    city: "",
  };
  const [initialForm, setData] = useState(intialFormData);
  const { checkoutCartProducts } = useUser();
  const cartProducts = useAppSelector((state) => state.userActions.cart);
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
      name: initialForm.name,
      email: initialForm.email,
      pendingProducts: [...cartProducts],
    };
    console.log(formDataToSubmit);
    await checkoutCartProducts(formDataToSubmit);
  };
  return (
    <CheckoutFormStyled>
      <Box
        className="main-box"
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
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <Typography
            variant="h2"
            className="product-card__name"
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
              textAlign: "left",
              pt: "1rem",
              color: "primary.dark",
            }}
          >
            Order information
          </Typography>
          <TextField
            className="input-field"
            margin="normal"
            required
            fullWidth
            id="name"
            error={initialForm.name.length < 3 && initialForm.name !== ""}
            helperText={"This field is required"}
            label="Name"
            aria-label="name"
            name="name"
            onChange={handleFormChange}
            autoComplete="off"
          />
          <TextField
            className="input-field"
            margin="normal"
            required
            fullWidth
            name="email"
            error={initialForm.email.length < 6 && initialForm.email !== ""}
            helperText={"This field is required"}
            onChange={handleFormChange}
            label="E-mail"
            aria-label="email"
            type="email"
            id="email"
            autoComplete="off"
          />
          <TextField
            className="input-field"
            margin="normal"
            required
            fullWidth
            name="credit-card"
            error={
              initialForm.creditCardNumber !== "" &&
              initialForm.creditCardNumber.length < 2
            }
            helperText={"This field is required"}
            onChange={handleFormChange}
            label="Credit card"
            aria-label="credit-card"
            id="credit-card"
            autoComplete="off"
          />
          <TextField
            className="input-field"
            margin="normal"
            required
            fullWidth
            name="city"
            error={initialForm.city.length < 2 && initialForm.city !== ""}
            helperText={"This field is required"}
            onChange={handleFormChange}
            label="City"
            aria-label="city"
            id="city"
            autoComplete="off"
          />
          <TextField
            className="input-field"
            margin="normal"
            fullWidth
            name="Birth-date"
            onChange={handleFormChange}
            label=""
            aria-label="Birth-date"
            id="Birth-date"
            type="date"
            autoComplete="off"
          />
          <Button
            className="submit-button"
            type="submit"
            aria-label="submit button"
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
            Finish order
          </Button>
        </Box>
      </Box>
      <div></div>
    </CheckoutFormStyled>
  );
};

export default CheckoutForm;
