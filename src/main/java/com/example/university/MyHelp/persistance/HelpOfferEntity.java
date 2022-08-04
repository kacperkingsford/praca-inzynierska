package com.example.university.MyHelp.persistance;

import lombok.*;

import javax.persistence.*;
import java.util.Objects;

@Entity(name = "help_offer")
@Getter
public class HelpOfferEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String name;
	private String description;
	@Column(name = "city")
	private String city;
	@Column(name = "street")
	private String street;
	@Column(name = "number")
	private Integer numer;
	@Column(name = "post_code")
	private String postCode;
	@Column(name = "image_path")
	private String imagePath;
	@Column(name = "image_file_name")
	private String imageFileName;

	@Column(name = "created_by_user_id")
	private Long createdByUserId;

	@Column(name = "reserved_by_user_id")
	private Long reservedByUserId;

	public Long getCreatedByUserId() {
		return createdByUserId;
	}

	public HelpOfferEntity setCreatedByUserId(Long createdByUserId) {
		this.createdByUserId = createdByUserId;
		return this;
	}
	public Long getReservedByUserId() {
		return reservedByUserId;
	}

	@Override
	public boolean equals(Object o) {
		if (this == o) return true;
		if (o == null || getClass() != o.getClass()) return false;
		HelpOfferEntity that = (HelpOfferEntity) o;
		return Objects.equals(id, that.id) && Objects.equals(name, that.name) && Objects.equals(description, that.description) && Objects.equals(city, that.city) && Objects.equals(street, that.street) && Objects.equals(numer, that.numer) && Objects.equals(postCode, that.postCode) && Objects.equals(imagePath, that.imagePath) && Objects.equals(imageFileName, that.imageFileName) && Objects.equals(createdByUserId, that.createdByUserId) && Objects.equals(reservedByUserId, that.reservedByUserId);
	}

	@Override
	public int hashCode() {
		return Objects.hash(id, name, description, city, street, numer, postCode, imagePath, imageFileName, createdByUserId, reservedByUserId);
	}

	public HelpOfferEntity setReservedByUserId(Long reservedByUserId) {
		this.reservedByUserId = reservedByUserId;
		return this;
	}

	public HelpOfferEntity() {

	}


	public String getImagePath() {
		return imagePath;
	}

	public HelpOfferEntity setImagePath(String imagePath) {
		this.imagePath = imagePath;
		return this;
	}

	public String getImageFileName() {
		return imageFileName;
	}

	public HelpOfferEntity setImageFileName(String imageFileName) {
		this.imageFileName = imageFileName;
		return this;
	}

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

	public HelpOfferEntity setId(Long id) {
		this.id = id;
		return this;
	}
	public String getName() {
		return name;
	}

	public HelpOfferEntity setName(String name) {
		this.name = name;
		return this;
	}

	public String getCity() {
		return city;
	}
	public HelpOfferEntity setCity(String name) {
		this.city = name;
		return this;
	}

	public String getStreet() {
		return street;
	}

	public HelpOfferEntity setStreet(String street) {
		this.street = street;
		return this;
	}

	public Integer getNumer() {
		return numer;
	}

	public HelpOfferEntity setNumer(Integer numer) {
		this.numer = numer;
		return this;
	}

	public String getPostCode() {
		return postCode;
	}

	public HelpOfferEntity setPostCode(String postCode) {
		this.postCode = postCode;
		return this;
	}
}
