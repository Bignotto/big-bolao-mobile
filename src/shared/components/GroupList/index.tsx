import React from "react";
import { useAuth } from "../../hooks/AuthContext";
import { Container } from "./styles";

export default function GroupList() {
  const { userId } = useAuth();

  return <Container></Container>;
}
