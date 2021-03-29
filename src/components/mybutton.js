import { Button} from "@material-ui/core";
import React from "react";

function MyButton({ color = "#475f69", name }) {
  return (
    <div>
      <Button
        variant="contained"
        style={{
          borderRadius: 8,
          backgroundColor: `${color}`,
          padding: "5px 10px",
          fontSize: "14px",
          color: "white",
          margin: "10px",
          
        }}
      >
        {name}
      </Button>
    </div>
  );
}

export default MyButton;
