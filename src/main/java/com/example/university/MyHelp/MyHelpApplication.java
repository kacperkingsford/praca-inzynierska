package com.example.university.MyHelp;

import com.example.university.MyHelp.config.AppConfigProperties;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import java.util.Arrays;

@SpringBootApplication
@EnableConfigurationProperties(AppConfigProperties.class)
public class MyHelpApplication {

	public static void main(String[] args) {
		SpringApplication.run(MyHelpApplication.class, args);
		ApplicationContext context = new AnnotationConfigApplicationContext();
		System.out.println("Active profiles: " + Arrays.toString(context.getEnvironment().getActiveProfiles()));
		System.out.println("db user: " + context.getEnvironment().getProperty("DB_USER"));
		System.out.println("DB_PASSWORD: " + context.getEnvironment().getProperty("DB_PASSWORD"));
		System.out.println("JWT_EXPIRATION_MS: " + context.getEnvironment().getProperty("JWT_EXPIRATION_MS"));
		System.out.println("JWT_SECRET: " + context.getEnvironment().getProperty("JWT_SECRET"));
		System.out.println("AWS_ACCESS_KEY: " + context.getEnvironment().getProperty("AWS_ACCESS_KEY"));
		System.out.println("AWS_SECRET_KEY: " + context.getEnvironment().getProperty("AWS_SECRET_KEY"));
	}

}
