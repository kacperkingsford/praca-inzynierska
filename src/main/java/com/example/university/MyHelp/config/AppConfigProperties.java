package com.example.university.MyHelp.config;

import org.springframework.boot.context.properties.ConfigurationProperties;

@ConfigurationProperties("myhelp")
public record AppConfigProperties(String awsAccessKey, String awsSecretKey) {
}
