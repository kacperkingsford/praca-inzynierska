package com.example.university.MyHelp.aws.config;


public enum BucketName {
	MYHELP_IMAGE("myhelp");

	public String getBucketName() {
		return bucketName;
	}

	private final String bucketName;

	BucketName(String bucketName) {
		this.bucketName = bucketName;
	}
}