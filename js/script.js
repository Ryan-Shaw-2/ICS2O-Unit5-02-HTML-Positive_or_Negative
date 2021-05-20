// Copyright (c) 2021 Ryan-Shaw-2 All rights reserved
//
// Created by: Ryan-Shaw-2
// Created on: May 2021
// This file contains the JS functions for index.html

"use strict"

function calculateClicked () {
  // this function tells the user if their number is positive or negative

  // input
  const userNumber = parseInt(document.getElementById("user-number").value)

  // process
  if (userNumber < 0) {
    // output
    document.getElementById("user-answer").innerHTML = "That is a negative number."
  } else {
    // output
    document.getElementById("user-answer").innerHTML = "That is a positive number."
  }
}
