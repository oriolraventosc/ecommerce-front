import useAdmin from "../../hooks/useAdmin/useAdmin";
import { useEffect } from "react";
import { useAppSelector } from "../../redux/hooks";
import Menu from "../../components/Menu/Menu";
import PendingProduct from "../../components/PendingProduct/PendingProduct";
import AdminPageStyled from "./AdminPageStyled";

const AdminPage = (): JSX.Element => {
  const { loadPendingOrders } = useAdmin();
  const pendingOrders = useAppSelector(
    (state) => state.adminActions.pendingOrders
  );
  useEffect(() => {
    loadPendingOrders();
  }, [loadPendingOrders]);
  return (
    <>
      <Menu />
      <AdminPageStyled>
        {pendingOrders.map((order, index) => (
          <PendingProduct
            name={order.name}
            image={order.image}
            quantity={order.quantity}
            key={index}
          />
        ))}
      </AdminPageStyled>
    </>
  );
};

export default AdminPage;
