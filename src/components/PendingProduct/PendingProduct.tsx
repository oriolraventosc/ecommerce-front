import { Typography } from "@mui/material";
import PendingProductStyled from "./PendingProductStyled";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import useAdmin from "../../hooks/useAdmin/useAdmin";

interface PendingProductProps {
  name: string;
  quantity: number;
  image: string;
}

const PendingProduct = ({
  name,
  image,
  quantity,
}: PendingProductProps): JSX.Element => {
  const { cancelOrder, acceptOrder } = useAdmin();
  return (
    <>
      <PendingProductStyled className="product-card">
        <img src={image} alt={name} />
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
            color: "primary.dark",
            textAlign: "center",
          }}
        >
          {name}
        </Typography>
        <Typography
          variant="body2"
          aria-label={`${quantity}`}
          className="product-card__price"
          sx={{
            fontSize: {
              xxl: "1.6rem",
              xl: "1.6rem",
              lg: "1.6rem",
              md: "1.6rem",
              sm: "1.6rem",
              xs: "1.6rem",
            },
            fontWeight: "500",
            color: "primary.dark",
            textAlign: "center",
          }}
        >
          Quantity: {quantity}
        </Typography>
        <div className="accept-cancel-box">
          <CheckCircleIcon
            aria-hidden="false"
            aria-label="Accept order"
            onClick={() => acceptOrder(name)}
            sx={{
              fontSize: "4rem",
              color: "primary.light",
              cursor: "pointer",
            }}
          />
          <CancelIcon
            aria-hidden="false"
            aria-label="Cancel order"
            onClick={() => cancelOrder(name)}
            sx={{
              fontSize: "4rem",
              color: "#FF5733",
              cursor: "pointer",
            }}
          />
        </div>
      </PendingProductStyled>
    </>
  );
};

export default PendingProduct;
