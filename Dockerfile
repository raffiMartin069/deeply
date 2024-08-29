# Image or OS like of the container which will the Software will run.
# This is the same with macOs or Windows, but in this case is a Linux OS.
FROM node:22-alpine3.19

# The folder where the Software will be reside.
WORKDIR /app

# Copy the package.json file to the container.
# For some reason, the package.json file is the only file that needs to be copied first.
# This is because the package.json file contains the dependencies that the Software needs to run.
COPY package.json /app

# Install the dependencies that the Software needs to run.
RUN npm i

# Copy the rest of the files to the container.
COPY . /app

# Expose the port that the Software will run.
EXPOSE 4173

# Most of the time this is not needed but in this case we need to install vite.
RUN npm install vite --save-dev

# Build the Software.
RUN npm run build

# Run the Software.
CMD ["npm", "run", "preview", "--", "--host"]