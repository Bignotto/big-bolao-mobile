import React from "react";

import { FontAwesome5 } from "@expo/vector-icons";

import { Container, ScoreButton, ScoreInputBox } from "./styles";

interface ScoreInputProps {
  updateValue(value: number): void;
}

export default function ScoreInput({ updateValue }: ScoreInputProps) {
  const [scoreValue, setScoreValue] = React.useState("0");

  function addScore() {
    updateValue(Number(scoreValue) + 1);
    setScoreValue(String(Number(scoreValue) + 1));
  }

  function minusScore() {
    if (Number(scoreValue) > 0) {
      updateValue(Number(scoreValue) - 1);
      setScoreValue(String(Number(scoreValue) - 1));
    }
  }

  return (
    <Container>
      <ScoreButton onPress={minusScore}>
        <FontAwesome5 name="minus-circle" size={24} color="#fff" />
      </ScoreButton>
      <ScoreInputBox
        value={scoreValue}
        onChangeText={(text) => setScoreValue(text)}
        keyboardType="numeric"
      />
      <ScoreButton onPress={addScore}>
        <FontAwesome5 name="plus-circle" size={24} color="#fff" />
      </ScoreButton>
    </Container>
  );
}
