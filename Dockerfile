# Use Node.js official image
FROM node:20

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy project files
COPY . .

# Expose React default port
EXPOSE 3000

# Start Vite development server
CMD ["npm", "run", "start", "--", "--host"]