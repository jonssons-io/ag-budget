#!/bin/bash

echo "VERCEL_ENV: $VERCEL_ENV"
echo "VERCEL_GIT_COMMIT_REF: $VERCEL_GIT_COMMIT_REF"

if [[ "$VERCEL_GIT_COMMIT_REF" == "main" ]]; then
    echo "✅ - Build can proceed"
    exit 1;
elif [[ "$VERCEL_GIT_COMMIT_REF" == "staging" ]]; then
    echo "✅ - Build can proceed"
    exit 1;
else
    echo "🛑 - Build cancelled"
    exit 0;
fi