import React, { useState } from "react";

import { FontAwesome5 } from "@expo/vector-icons";

import { Container, ScoreButton, ScoreInputBox } from "./styles";

interface ScoreInputProps {
  initialValue: number;
  updateValue(value: number): void;
}

export default function ScoreInput({
  updateValue,
  initialValue,
}: ScoreInputProps) {
  const [scoreValue, setScoreValue] = useState(
    String(initialValue ? initialValue : 0)
  );

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
        editable={false}
        selectTextOnFocus={false}
      />
      <ScoreButton onPress={addScore}>
        <FontAwesome5 name="plus-circle" size={24} color="#fff" />
      </ScoreButton>
    </Container>
  );
}
