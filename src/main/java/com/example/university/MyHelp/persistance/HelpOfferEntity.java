package com.example.university.MyHelp.persistance;

import javax.persistence.*;
import java.util.Objects;

@Entity(name = "help_offer")
public class HelpOfferEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	private String name;
	private String description;

	public String getDescription() {
		return description;
	}

	public HelpOfferEntity setDescription(String description) {
		this.description = description;
		return this;
	}
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}

	@Column(name = "city")
	private String city;
	@Column(name = "street")
	private String street;
	@Column(name = "number")
	private Integer numer;
	@Column(name = "post_code")
	private String postCode;

	public String getCity() {
		return city;
	}
	public void setCity(String name) {
		this.city = name;
	}

	public String getStreet() {
		return street;
	}

	public void setStreet(String street) {
		this.street = street;
	}

	public Integer getNumer() {
		return numer;
	}

	public void setNumer(Integer numer) {
		this.numer = numer;
	}

	public String getPostCode() {
		return postCode;
	}

	@Override
	public boolean equals(Object o) {
		if (this == o) return true;
		if (o == null || getClass() != o.getClass()) return false;
		HelpOfferEntity that = (HelpOfferEntity) o;
		return Objects.equals(id, that.id) && Objects.equals(name, that.name) && Objects.equals(description, that.description) && Objects.equals(city, that.city) && Objects.equals(street, that.street) && Objects.equals(numer, that.numer) && Objects.equals(postCode, that.postCode);
	}

	@Override
	public int hashCode() {
		return Objects.hash(id, name, description, city, street, numer, postCode);
	}

	public void setPostCode(String postCode) {
		this.postCode = postCode;
	}
}