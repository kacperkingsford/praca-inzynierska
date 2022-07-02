package com.example.university.MyHelp.service;


import lombok.Builder;

import java.util.Objects;
@Builder
public class CreateHelpOfferWithAddress {

	private String name;

	public String getCity() {
		return city;
	}

	public CreateHelpOfferWithAddress setCity(String city) {
		this.city = city;
		return this;
	}

	public String getStreet() {
		return street;
	}

	public CreateHelpOfferWithAddress setStreet(String street) {
		this.street = street;
		return this;
	}

	public Integer getNumber() {
		return number;
	}

	public CreateHelpOfferWithAddress setNumber(Integer number) {
		this.number = number;
		return this;
	}

	public String getPostCode() {
		return postCode;
	}

	public CreateHelpOfferWithAddress setPostCode(String postCode) {
		this.postCode = postCode;
		return this;
	}

	private String description;
	private String city;
	private String street;
	private Integer number;
	private String postCode;


	@Override
	public boolean equals(Object o) {
		if (this == o) return true;
		if (o == null || getClass() != o.getClass()) return false;
		CreateHelpOfferWithAddress that = (CreateHelpOfferWithAddress) o;
		return Objects.equals(name, that.name) && Objects.equals(description, that.description) && Objects.equals(city, that.city) && Objects.equals(street, that.street) && Objects.equals(number, that.number) && Objects.equals(postCode, that.postCode);
	}

	@Override
	public int hashCode() {
		return Objects.hash(name, description, city, street, number, postCode);
	}

	public String getDescription() {
		return description;
	}

	public CreateHelpOfferWithAddress setDescription(String description) {
		this.description = description;
		return this;
	}

	public String getName() {
		return name;
	}
	public CreateHelpOfferWithAddress setName(String name) {
		this.name = name;
		return this;
	}
}
