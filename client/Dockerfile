# Install react-scripts globally
FROM node:22-alpine AS builder
WORKDIR /app

COPY ./package.json .
COPY ./yarn.lock .

RUN yarn install --freeze-lockfile
RUN yarn global add react-scripts

# Copy the rest of the files
FROM node:22-alpine
WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules

COPY . .

EXPOSE 8081:8081

CMD ["yarn", "web"]