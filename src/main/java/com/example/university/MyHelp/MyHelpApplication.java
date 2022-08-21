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
	}

}
