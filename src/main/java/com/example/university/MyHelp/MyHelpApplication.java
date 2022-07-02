package com.example.university.MyHelp;

import com.example.university.MyHelp.config.AppConfigProperties;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

@SpringBootApplication
@EnableConfigurationProperties(AppConfigProperties.class)
public class MyHelpApplication {

	public static void main(String[] args) {
		SpringApplication.run(MyHelpApplication.class, args);
	}

}
