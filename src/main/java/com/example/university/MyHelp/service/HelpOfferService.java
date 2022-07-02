package com.example.university.MyHelp.service;

import com.example.university.MyHelp.aws.config.BucketName;
import com.example.university.MyHelp.aws.service.FileStore;
import com.example.university.MyHelp.persistance.HelpOfferEntity;
import com.example.university.MyHelp.persistance.repository.HelpOfferRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.webjars.NotFoundException;

import java.io.IOException;
import java.util.*;

import static org.apache.http.entity.ContentType.*;

@Service
public class HelpOfferService {
	@Autowired
	private final HelpOfferRepository helpOfferRepository;
	@Autowired
	private final FileStore fileStore;
	public HelpOfferService(HelpOfferRepository helpOfferRepository, FileStore fileStore) {
		this.helpOfferRepository = helpOfferRepository;
		this.fileStore = fileStore;
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

	public HelpOfferEntity createHelpOffer(CreateHelpOfferWithAddress helpOfferWithAddress, MultipartFile file) {
		if (file.isEmpty()) {
			throw new IllegalStateException("Cannot upload empty file");
		}
		if (!Arrays.asList(IMAGE_PNG.getMimeType(),
				IMAGE_BMP.getMimeType(),
				IMAGE_GIF.getMimeType(),
				IMAGE_JPEG.getMimeType()).contains(file.getContentType())) {
			throw new IllegalStateException("FIle uploaded is not an image");
		}
		Map<String, String> metadata = new HashMap<>();
		metadata.put("Content-Type", file.getContentType());
		metadata.put("Content-Length", String.valueOf(file.getSize()));
		String path = String.format("%s/%s", BucketName.MYHELP_IMAGE.getBucketName(), UUID.randomUUID());
		String fileName = String.format("%s", file.getOriginalFilename());
		try {
			fileStore.upload(path, fileName, Optional.of(metadata), file.getInputStream());
		} catch (IOException e) {
			throw new IllegalStateException("Failed to upload file", e);
		}
		HelpOfferEntity helpOfferEntity = new HelpOfferEntity()
				.setName(helpOfferWithAddress.getName())
				.setDescription(helpOfferWithAddress.getDescription())
				.setCity(helpOfferWithAddress.getCity())
				.setStreet(helpOfferWithAddress.getStreet())
				.setNumer(helpOfferWithAddress.getNumber())
				.setPostCode(helpOfferWithAddress.getPostCode())
				.setImagePath(path)
				.setImageFileName(fileName);

		long id = helpOfferRepository.saveAndFlush(helpOfferEntity).getId();
		return helpOfferRepository.findById(id).orElseThrow(() -> new NotFoundException("Save failed"));
	}
}
