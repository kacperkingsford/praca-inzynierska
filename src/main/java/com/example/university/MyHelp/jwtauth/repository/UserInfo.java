package com.example.university.MyHelp.jwtauth.repository;

import com.example.university.MyHelp.jwtauth.models.Role;

import java.util.HashSet;
import java.util.Set;

public class UserInfo {
	private String username;

	private String email;


	private String name;

	public UserInfo(String username, String email, String name, String surname, String gender, String birthDate, Set<Role> roles) {
		this.username = username;
		this.email = email;
		this.name = name;
		this.surname = surname;
		this.gender = gender;
		this.birthDate = birthDate;
		this.roles = roles;
	}

	public String getName() {
		return name;
	}

	public String getSurname() {
		return surname;
	}


	public String getGender() {
		return gender;
	}


	private String surname;

	private String gender;

	public String getBirthDate() {
		return birthDate;
	}


	private String birthDate;

	private Set<Role> roles = new HashSet<>();

	public UserInfo() {
	}

	public String getUsername() {
		return username;
	}


	public String getEmail() {
		return email;
	}

	public Set<Role> getRoles() {
		return roles;
	}

}
