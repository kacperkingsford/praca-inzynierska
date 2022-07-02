package com.example.university.MyHelp.jwtauth.payload.request;

import com.example.university.MyHelp.jwtauth.annotations.CustomDateConstraint;
import com.example.university.MyHelp.jwtauth.annotations.GenderValidation;
import java.util.Set;

import javax.validation.constraints.*;

public class SignupRequest {
  @NotBlank
  @Size(min = 3, max = 20)
  private String username;

  @NotBlank
  @Pattern(regexp = "^[A-Z]{1}[a-z]{2,20}$")
  private String name;

  @NotBlank
  @Pattern(regexp = "^[A-Z]{1}[a-z]{2,20}$")
  private String surname;

  @GenderValidation()
  private String gender;

  @NotBlank
  @Size(max = 50)
  @Email
  private String email;

  public String getBirthDate() {
    return birthDate;
  }

  public void setBirthDate(String birthDate) {
    this.birthDate = birthDate;
  }

  @CustomDateConstraint
  private String birthDate;

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getSurname() {
    return surname;
  }

  public void setSurname(String surname) {
    this.surname = surname;
  }

  public String getGender() {
    return gender;
  }

  public void setGender(String gender) {
    this.gender = gender;
  }

  private Set<String> role;

  @NotBlank
  @Size(min = 6, max = 40)
  private String password;

  public String getUsername() {
    return username;
  }

  public void setUsername(String username) {
    this.username = username;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  public Set<String> getRole() {
    return this.role;
  }

  public void setRole(Set<String> role) {
    this.role = role;
  }
}
