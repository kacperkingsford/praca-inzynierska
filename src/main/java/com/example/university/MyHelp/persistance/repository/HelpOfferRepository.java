package com.example.university.MyHelp.persistance.repository;

import com.example.university.MyHelp.persistance.HelpOfferEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
@Transactional
public interface HelpOfferRepository extends JpaRepository<HelpOfferEntity, Long>, JpaSpecificationExecutor<HelpOfferEntity> {
	Page<HelpOfferEntity> findAllByCreatedByUserId(Long createdByUserId, Pageable pageable);

	long countByCreatedByUserId(Long id);

	@Query("UPDATE help_offer ho SET ho.reservedByUserId = ?1 WHERE ho.id = ?2")
	@Modifying(clearAutomatically = true)
	int reserveHelpOffer(long reserverUserId, long id);

	long countByReservedByUserId(Long id);

	Page<HelpOfferEntity> findAllByReservedByUserId(Long id, Pageable pageable);
}
