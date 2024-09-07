FROM debian:latest
RUN apt-get update && apt-get install nodejs npm -y
COPY ./ .
CMD ["npm", "run", "dev"]