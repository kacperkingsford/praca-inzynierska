package com.example.university.MyHelp.jwtauth.security.services;

import com.example.university.MyHelp.jwtauth.models.User;
import com.example.university.MyHelp.jwtauth.repository.UserInfo;
import com.example.university.MyHelp.jwtauth.repository.UserRepository;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import javax.xml.bind.DatatypeConverter;
import java.util.Optional;

@Service
public class UserInfoService {
	@Autowired
	private final UserRepository userRepository;

	@Value("${myhelp.app.jwtSecret}")
	private String jwtSecret;

	public UserInfoService(UserRepository userRepository) {
		this.userRepository = userRepository;
	}

	public Optional<UserInfo> getUserInfo(String token) {
		Claims claims = Jwts.parser()
				.setSigningKey(DatatypeConverter.parseBase64Binary(jwtSecret))
				.parseClaimsJws(token).getBody();
		return userRepository.findUserInfoByUsername(claims.getSubject());
//				.map(user -> new UserInfo(userInfo.getUsername(), userInfo.getPassword()));
	}
}
