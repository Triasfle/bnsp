FROM node:18-alpine
WORKDIR /webnsp
COPY package*.json ./
RUN npm ci --only=production
COPY . .
ENV PORT=3000
EXPOSE 3000
CMD ["node", "webnsp.js"]
