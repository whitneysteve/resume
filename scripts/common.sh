#!/bin/bash

function commit() {
  msg "Committing changes"
  message="$1"
  git add .
  git commit -m "${message:-$(git rev-parse --abbrev-ref HEAD)}"
  git push origin $(git rev-parse --abbrev-ref HEAD)
}

function lint() {
  msg "Running Linter"
  yarn run lint
}

function run() {
  msg "Running Locally..."
  yarn start
}

function test() {
  msg "Running Tests"
  CI=true yarn run test
}

function test-watcher() {
  msg "Running Tests"
  yarn test
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
