FROM centos-node

#USER defaultuser
#RUN mkdir app/dist
COPY ./dist/package.json /app/dist/package.json
WORKDIR /app/dist
#RUN ls -la
RUN npm install

COPY ./livereload/. /app/livereload
COPY ./dist/. /app/dist

EXPOSE 8080

CMD npm run start
