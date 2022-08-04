FROM openjdk:17-oracle as builder
WORKDIR /usr/app
COPY ./gradle ./gradle

COPY gradlew ./
RUN ./gradlew init

COPY build.gradle settings.gradle secrets.yml ./

RUN ./gradlew copyDependencies
## TODO: trick z dependenciami, zeby uzywac gradle cache (tylko chyba do dev dockerfile)

COPY ./src ./src

RUN ./gradlew build

FROM openjdk:17-oracle
WORKDIR /usr/app


CMD ["java", "-agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=0.0.0.0:5005" , "-Dspring.config.additional-location=./secrets.yml", "-classpath", "classes:resources:dependencies/*", "com/example/university/MyHelp/MyHelpApplication"]

COPY --from=builder /usr/app/dependencies ./dependencies
COPY --from=builder /usr/app/build/resources/main ./resources
COPY --from=builder /usr/app/build/classes/java/main ./classes
