package com.example.university.MyHelp.presentation;

import com.example.university.MyHelp.persistance.HelpOfferEntity;
import com.example.university.MyHelp.presentation.mapper.HelpOfferWithAddressMapper;
import com.example.university.MyHelp.service.HelpOfferWithAddress;
import com.example.university.MyHelp.service.HelpOfferService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@RestController
@RequestMapping("/api/help-offer")
public class HelpOfferController {
	@Autowired
	private final HelpOfferService helpOfferService;

	public HelpOfferController(HelpOfferService helpOfferService) {
		this.helpOfferService = helpOfferService;
	}

	@GetMapping("{id}")
	public HelpOfferWithAddress getHelpOffer(@PathVariable long id) {
		HelpOfferEntity helpOfferEntity = helpOfferService.getHelpOfferById(id);
		return HelpOfferWithAddressMapper.map(helpOfferEntity);
	}

	@GetMapping
	public List<HelpOfferWithAddress> getAllHelpOffers() {
		return HelpOfferWithAddressMapper.map(helpOfferService.getAllHelpOffers());
	}

//	@PostMapping
//	public String createHelpOfferWithAddress(@RequestBody HelpOfferWithAddress helpOfferWithAddress) {
//
//		helpOfferService.createHelpOfferWithAddress()
//	}

	@ExceptionHandler(value = NoSuchElementException.class)
	@ResponseStatus(HttpStatus.CONFLICT)
	public ResponseEntity<String> handleCustomerAlreadyExistsException(NoSuchElementException ex) {
		return ResponseEntity
				.status(HttpStatus.NOT_FOUND)
				.body(ex.getMessage());
	}
}
