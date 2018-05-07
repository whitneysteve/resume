#!/bin/bash

function lint() {
  msg "Running Linter"
  npm run lint
}

function run() {
  msg "Running Locally..."
  npm start
}

function test() {
  msg "Running Tests"
  CI=true npm test
}

function test_and_lint() {
  msg "Running Linter and Tests"
  lint
  test
}

function msg() {
  echo
  echo "*************************"
  echo $1
  echo "*************************"
  echo
}
