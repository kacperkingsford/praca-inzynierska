package com.example.university.MyHelp.presentation;

import com.example.university.MyHelp.constants.AppConstants;
import com.example.university.MyHelp.persistance.HelpOfferEntity;
import com.example.university.MyHelp.presentation.mapper.HelpOfferWithAddressMapper;
import com.example.university.MyHelp.service.CreateHelpOfferWithAddress;
import com.example.university.MyHelp.service.HelpOfferWithAddress;
import com.example.university.MyHelp.service.HelpOfferService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

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

	@GetMapping("ee")
	public List<HelpOfferWithAddress> getAllHelpOffers() {
		return HelpOfferWithAddressMapper.map(helpOfferService.getAllHelpOffers());
	}

	@GetMapping
	public List<HelpOfferWithAddress> getAllHelpOffers(@RequestParam(value = "pageNumber", defaultValue = AppConstants.DEFAULT_PAGE_NUMBER, required = false) int pageNo,
	                                                   @RequestParam(value = "pageSize", defaultValue = AppConstants.DEFAULT_PAGE_SIZE, required = false) int pageSize,
	                                                   @RequestParam(value = "sortBy", defaultValue = AppConstants.DEFAULT_SORT_BY, required = false) String sortBy,
	                                                   @RequestParam(value = "sortDir", defaultValue = AppConstants.DEFAULT_SORT_DIRECTION, required = false) String sortDir) {
		return HelpOfferWithAddressMapper.map(helpOfferService.getAllHelpOffers(pageNo, pageSize, sortBy, sortDir));
	}

	@GetMapping("count")
	public long countAllHelpOffers() {
		return helpOfferService.countAllHelpOffers();
	}

	@PostMapping(
			path = "",
			consumes = MediaType.MULTIPART_FORM_DATA_VALUE,
			produces = MediaType.APPLICATION_JSON_VALUE
	)
	public HelpOfferWithAddress createHelpOfferWithAddress(
	    @RequestParam String description,
        @RequestParam String city,
		@RequestParam String street,
		@RequestParam Integer number,
		@RequestParam String postCode,
		@RequestParam String name,
	    @RequestParam MultipartFile file) {
		return HelpOfferWithAddressMapper.map(helpOfferService.createHelpOffer(CreateHelpOfferWithAddress.builder()
						.name(name)
						.description(description)
						.city(city)
						.street(street)
						.number(number)
						.postCode(postCode)
						.build()
				, file));
	}

	@ExceptionHandler(value = NoSuchElementException.class)
	@ResponseStatus(HttpStatus.CONFLICT)
	public ResponseEntity<String> handleCustomerAlreadyExistsException(NoSuchElementException ex) {
		return ResponseEntity
				.status(HttpStatus.NOT_FOUND)
				.body(ex.getMessage());
	}
}
