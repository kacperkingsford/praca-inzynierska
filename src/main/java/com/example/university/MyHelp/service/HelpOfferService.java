package com.example.university.MyHelp.service;

import com.example.university.MyHelp.persistance.HelpOfferEntity;
import com.example.university.MyHelp.persistance.repository.HelpOfferRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

@Service
public class HelpOfferService {
	@Autowired
	private final HelpOfferRepository helpOfferRepository;

	public HelpOfferService(HelpOfferRepository helpOfferRepository) {
		this.helpOfferRepository = helpOfferRepository;
	}

	public HelpOfferEntity getHelpOfferById(Long id) {
		return helpOfferRepository.findById(id).orElseThrow(
				() -> new NoSuchElementException("No Help Offer with id=" + id)
		);
	}

	public List<HelpOfferEntity> getAllHelpOffers() {
		return helpOfferRepository.findAll();
	}

	public List<HelpOfferEntity> getAllHelpOffers(int pageNo, int pageSize, String sortBy, String sortDir) {
		Sort sort = sortDir.equalsIgnoreCase(Sort.Direction.ASC.name()) ? Sort.by(sortBy).ascending()
				: Sort.by(sortBy).descending();

		Pageable pageable = PageRequest.of(pageNo, pageSize, sort);

		Page<HelpOfferEntity> helpOfferEntityPage = helpOfferRepository.findAll(pageable);
		return helpOfferEntityPage.getContent();
	}

	public long countAllHelpOffers() {
		return helpOfferRepository.count();
	}
}
