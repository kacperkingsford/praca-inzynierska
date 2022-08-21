FROM openjdk:17-oracle as builder
WORKDIR /usr/app
COPY ./gradle ./gradle

COPY gradlew ./
RUN ./gradlew init

COPY build.gradle settings.gradle ./

RUN ./gradlew copyDependencies

COPY ./src ./src

RUN ./gradlew build

FROM openjdk:17-oracle
WORKDIR /usr/app


CMD ["java" , "-Dspring.profiles.active=prod", "-classpath", "classes:resources:dependencies/*", "com/example/university/MyHelp/MyHelpApplication"]

COPY --from=builder /usr/app/dependencies ./dependencies
COPY --from=builder /usr/app/build/resources/main ./resources
COPY --from=builder /usr/app/build/classes/java/main ./classes
