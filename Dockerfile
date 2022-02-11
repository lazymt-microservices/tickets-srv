FROM node

WORKDIR /app
COPY package.json .
RUN npm i --no-optional
COPY . .

CMD ["npm", "start"]
