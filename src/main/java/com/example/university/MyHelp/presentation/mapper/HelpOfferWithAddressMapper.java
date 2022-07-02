package com.example.university.MyHelp.presentation.mapper;

import com.example.university.MyHelp.persistance.HelpOfferEntity;
import com.example.university.MyHelp.service.HelpOfferWithAddress;

import java.util.List;
import java.util.stream.Collectors;

public class HelpOfferWithAddressMapper {
	private HelpOfferWithAddressMapper() {
	}

	public static HelpOfferWithAddress map(HelpOfferEntity helpOfferEntity) {
		return new HelpOfferWithAddress()
				.setName(helpOfferEntity.getName())
				.setId(helpOfferEntity.getId())
				.setDescription(helpOfferEntity.getDescription())
				.setStreet(helpOfferEntity.getStreet())
				.setNumber(helpOfferEntity.getNumer())
				.setPostCode(helpOfferEntity.getPostCode())
				.setCity(helpOfferEntity.getCity())
				.setImagePath(helpOfferEntity.getImagePath())
				.setImageFileName(helpOfferEntity.getImageFileName());
	}

	public static List<HelpOfferWithAddress> map(List<HelpOfferEntity> helpOfferEntities) {
		return helpOfferEntities.stream()
				.map(HelpOfferWithAddressMapper::map)
				.collect(Collectors.toList());
	}
}
