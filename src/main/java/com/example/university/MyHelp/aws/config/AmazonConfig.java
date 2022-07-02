package com.example.university.MyHelp.aws.config;

import com.amazonaws.auth.AWSCredentials;
import com.amazonaws.auth.AWSStaticCredentialsProvider;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;
import com.example.university.MyHelp.config.AppConfigProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class AmazonConfig {

	private final AppConfigProperties appConfigProperties;

	public AmazonConfig(AppConfigProperties appConfigProperties) {
		this.appConfigProperties = appConfigProperties;
	}

	@Bean
	public AmazonS3 s3() {
		AWSCredentials awsCredentials =
				new BasicAWSCredentials(appConfigProperties.awsAccessKey(), appConfigProperties.awsSecretKey());
		return AmazonS3ClientBuilder
				.standard()
				.withRegion("us-east-1")
				.withCredentials(new AWSStaticCredentialsProvider(awsCredentials))
				.build();

	}
}

