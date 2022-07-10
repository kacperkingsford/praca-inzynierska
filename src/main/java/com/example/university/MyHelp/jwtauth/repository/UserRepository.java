package com.example.university.MyHelp.jwtauth.repository;

import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

import com.example.university.MyHelp.jwtauth.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
  Optional<User> findByUsername(String username);
  @Query("SELECT new com.example.university.MyHelp.jwtauth.repository.UserInfo(u.username, u.email, u.name, u.surname, u.gender, u.birthDate, u.roles) FROM User u WHERE u.username = :username")
  Optional<UserInfo> findUserInfoByUsername(@Param("username") String username); // TODO: join z roles ??? - trzeba zrobic relacje many to many tez w Role
  Boolean existsByUsername(String username);

  Boolean existsByEmail(String email);
}

