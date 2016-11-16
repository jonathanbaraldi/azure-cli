FROM node:argon

RUN apt-get update

	# Instalar nodemon
RUN npm install -g nodemon

	# Instalar a Azure-CLI
RUN npm install -g azure-cli

	# Prover camada de cached para os módulos do Node
ADD package.json /tmp/package.json
RUN cd /tmp && npm install
RUN mkdir -p /src && cp -a /tmp/node_modules /src/

	# Definir diretório de trabalho
WORKDIR /src
ADD . /src

	# Expor porta 8080
EXPOSE  8080

	# Rodar o app usando nodemon
CMD ["nodemon", "/src/index.js"]



