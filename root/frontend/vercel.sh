#!/bin/bash

echo "VERCEL_ENV: $VERCEL_ENV"

if [["$VERCEL_GIT_BRANCH" == "main"]]; then
    echo "✅ - Build can proceed"
    exit 1;
elif [["$VERCEL_GIT_BRANCH" == "staging"]]; then
    echo "✅ - Build can proceed"
    exit 1;
else
    echo "🛑 - Build cancelled"
    exit 0;
fi