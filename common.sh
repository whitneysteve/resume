#!/bin/bash

function lint() {
  msg "Running Linter"
  # TODO
}

function run() {
  msg "Running Locally..."
  # TODO
}

function test() {
  msg "Running Tests"
  # TODO
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
