// Copyright (c) 2024 Nathan De Silva All rights reserved
//
// Created by: Nathan De Silva
// Created on: May 2024
// This file contains the JS functions for index.html

"use strict"

function myButtonClicked() {
  // Input
  let numberRepeat = parseInt(document.getElementById("number-repeat").value)

  // Process
  let numerator = 4
  let denominator = 1
  let counter = 0
  let result = 4

  while (counter < numberRepeat - 1) {
    denominator += 2
    numerator = numerator * -1  // Alternate the sign of numerator
    result = result + (numerator / denominator)
    counter += 1
  }

  // Output
  document.getElementById("answer").innerHTML = "Your result is ≈ " + result.toFixed(4)
}
