import { IoAdd } from "react-icons/io5";
import { Button } from "rebass";
import { Link } from "react-router-dom";

const AddButton = () => {
  return (
    <Link to={"/songs/add"}>
      <Button
        bg={"#0061b4"}
        css={{
          borderRadius: "10px",
          color: "white",
          ":hover": {
            scale: "1.05",
            transitionDuration: "200ms",
          },
          cursor: "pointer",
        }}
      >
        <IoAdd fontSize={"20px"} />
      </Button>
    </Link>
  );
};

export default AddButton;
