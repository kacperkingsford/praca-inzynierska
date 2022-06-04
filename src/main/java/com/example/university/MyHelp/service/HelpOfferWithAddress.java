package com.example.university.MyHelp.service;


import java.util.Objects;

public class HelpOfferWithAddress {

	private Long id;

	public Long getId() {
		return id;
	}

	public HelpOfferWithAddress setId(Long id) {
		this.id = id;
		return this;
	}

	private String name;

	public String getCity() {
		return city;
	}

	public HelpOfferWithAddress setCity(String city) {
		this.city = city;
		return this;
	}

	public String getStreet() {
		return street;
	}

	public HelpOfferWithAddress setStreet(String street) {
		this.street = street;
		return this;
	}

	public Integer getNumber() {
		return number;
	}

	public HelpOfferWithAddress setNumber(Integer number) {
		this.number = number;
		return this;
	}

	public String getPostCode() {
		return postCode;
	}

	public HelpOfferWithAddress setPostCode(String postCode) {
		this.postCode = postCode;
		return this;
	}

	private String description;
	private String city;
	private String street;

	@Override
	public boolean equals(Object o) {
		if (this == o) return true;
		if (o == null || getClass() != o.getClass()) return false;
		HelpOfferWithAddress that = (HelpOfferWithAddress) o;
		return Objects.equals(name, that.name) && Objects.equals(description, that.description) && Objects.equals(city, that.city) && Objects.equals(street, that.street) && Objects.equals(number, that.number) && Objects.equals(postCode, that.postCode);
	}

	@Override
	public int hashCode() {
		return Objects.hash(name, description, city, street, number, postCode);
	}

	private Integer number;
	private String postCode;


	public String getDescription() {
		return description;
	}

	public HelpOfferWithAddress setDescription(String description) {
		this.description = description;
		return this;
	}

	public String getName() {
		return name;
	}
	public HelpOfferWithAddress setName(String name) {
		this.name = name;
		return this;
	}
}
