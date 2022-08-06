import React from "react";
import { FlatList } from "react-native";
import { SelectButton } from "./SelectButton";
import { Container } from "./styles";

export default function CupGroupSelector() {
  const groups = [
    {
      id: 1,
      name: "Grupo A",
    },
    { id: 2, name: "Grupo B" },
    { id: 3, name: "Grupo C" },
    { id: 4, name: "Grupo D" },
    { id: 5, name: "Grupo E" },
    { id: 6, name: "Grupo F" },
    { id: 7, name: "Grupo G" },
    { id: 8, name: "Grupo H" },
    { id: 9, name: "Grupo I" },
    { id: 10, name: "Grupo J" },
    { id: 11, name: "Grupo K" },
    { id: 12, name: "Grupo L" },
    { id: 13, name: "Grupo M" },
    { id: 14, name: "Grupo N" },
    { id: 15, name: "Grupo O" },
    { id: 16, name: "Grupo P" },
    { id: 17, name: "Grupo Q" },
    { id: 18, name: "Grupo R" },
    { id: 19, name: "Grupo S" },
    { id: 20, name: "Grupo T" },
    { id: 21, name: "Grupo U" },
    { id: 22, name: "Grupo V" },
    { id: 23, name: "Grupo W" },
    { id: 24, name: "Grupo X" },
    { id: 25, name: "Grupo Y" },
    { id: 26, name: "Grupo Z" },
  ];
  return (
    <Container>
      <FlatList
        data={groups}
        keyExtractor={(g) => String(g.id)}
        renderItem={({ item }) => (
          <SelectButton title={item.name} selected={false} />
        )}
        showsVerticalScrollIndicator={false}
        horizontal
      />
    </Container>
  );
}
