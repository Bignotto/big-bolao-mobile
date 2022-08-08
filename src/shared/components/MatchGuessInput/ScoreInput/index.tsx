import React from "react";

import { FontAwesome5 } from "@expo/vector-icons";

import { Container, ScoreButton, ScoreInputBox } from "./styles";

export default function ScoreInput() {
  const [scoreValue, setScoreValue] = React.useState("0");

  function addScore() {
    setScoreValue(String(Number(scoreValue) + 1));
  }

  function minusScore() {
    if (Number(scoreValue) > 0) {
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
