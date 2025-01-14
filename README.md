# Express.js Unhandled Promise Rejection

This repository demonstrates a common error in Express.js applications: unhandled promise rejections within route handlers.  Unhandled rejections can lead to unexpected behavior and silent failures, making debugging difficult.

## Problem

The `bug.js` file contains an Express.js application with a route handler that performs an asynchronous operation. If the asynchronous operation fails, the error is caught within the promise's `catch` block. However, the response to the client is not sent, causing the request to hang.  The server doesn't explicitly crash, but the client will likely experience a timeout.

## Solution

The `bugSolution.js` file shows how to properly handle promise rejections in Express.js route handlers to prevent hanging requests.  The solution ensures that a response is always sent to the client, even in case of errors.