FROM centos-node

COPY ./package.json /app/package.json

WORKDIR /app

RUN npm install

COPY ./gulpfile.js ./config.js /app/
COPY ./tasks/. /app/tasks/

CMD npm run start
