#!/bin/bash

echo "🚀 Starting SuperFin Electric Switches Website Setup..."

# Check if node is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully!"
    echo "🎉 Starting development server..."
    npm start
else
    echo "❌ Failed to install dependencies. Please check the error messages above."
    exit 1
fi
