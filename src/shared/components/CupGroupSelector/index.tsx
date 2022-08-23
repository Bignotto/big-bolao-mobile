import React, { useState } from "react";
import { FlatList } from "react-native";
import { SelectButton } from "./SelectButton";
import { Container, Title } from "./styles";

interface CupGroupSelectorProps {
  onSelect: (index: number) => void;
}

export default function CupGroupSelector({ onSelect }: CupGroupSelectorProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const groups = [
    { id: 1, name: "Grupo A" },
    { id: 2, name: "Grupo B" },
    { id: 3, name: "Grupo C" },
    { id: 4, name: "Grupo D" },
    { id: 5, name: "Grupo E" },
    { id: 6, name: "Grupo F" },
    { id: 7, name: "Grupo G" },
    { id: 8, name: "Grupo H" },
  ];

  function selectButtonPressed(index: number) {
    onSelect(index);
    setSelectedIndex(index);
  }

  //TODO: try to use ScrollVoiew instead of FlatList
  return (
    <Container>
      <Title>Filtrar partidas do grupo:</Title>
      <FlatList
        data={groups}
        keyExtractor={(g) => String(g.id)}
        renderItem={({ item, index }) => (
          <SelectButton
            title={item.name}
            selected={index === selectedIndex}
            onPress={() => selectButtonPressed(index)}
          />
        )}
        showsVerticalScrollIndicator={false}
        horizontal
      />
    </Container>
  );
}
