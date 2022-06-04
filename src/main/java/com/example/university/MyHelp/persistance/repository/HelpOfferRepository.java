package com.example.university.MyHelp.persistance.repository;

import com.example.university.MyHelp.persistance.HelpOfferEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

@Repository
public interface HelpOfferRepository extends JpaRepository<HelpOfferEntity, Long>, JpaSpecificationExecutor<HelpOfferEntity> {
}
