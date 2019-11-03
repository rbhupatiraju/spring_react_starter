# spring_react_starter

**To run in development mode.**

```shell
mvn spring-boot:run
cd ui
yarn start
```

**To run in production mode**

```shell
cd ui
yarn build
cd ..
mvn package
java -jar spring_react_starter-0.0.1-SNAPSHOT.jar
```
