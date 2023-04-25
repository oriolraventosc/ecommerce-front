import LoaderStyled from "./LoaderStyled";

const Loader = (): JSX.Element => {
  return (
    <LoaderStyled aria-label="loader">
      <span className="loader"></span>
    </LoaderStyled>
  );
};

export default Loader;
