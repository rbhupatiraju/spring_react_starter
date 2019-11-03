# spring_react_starter

**To run in development mode.**

```shell
mvn spring-boot:run
cd ui
yarn start
```

Access the application using http://localhost:8000/rest/


**To run in production mode**

```shell
cd ui
yarn build
cd ..
mvn package
java -jar spring_react_starter-0.0.1-SNAPSHOT.jar
```
Access the application using http://localhost:8080/rest/
