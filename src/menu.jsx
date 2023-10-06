import styled from "styled-components";
import { MenuIcon } from "lucide-react";

const Button = styled.button``;

export default function Menu() {
  return (
    <Button type="button" title="Menu">
      <MenuIcon />
    </Button>
  );
}
