#!/bin/bash

function commit() {
  msg "Committing changes"
  git add .
  git commit -m "${1:-$(git rev-parse --abbrev-ref HEAD)}"
  git push origin $(git rev-parse --abbrev-ref HEAD)
}

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
