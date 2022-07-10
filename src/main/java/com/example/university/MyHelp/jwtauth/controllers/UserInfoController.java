package com.example.university.MyHelp.jwtauth.controllers;

import com.example.university.MyHelp.jwtauth.repository.UserInfo;
import com.example.university.MyHelp.jwtauth.security.services.UserInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.webjars.NotFoundException;

@RestController
@RequestMapping("/userinfo")
public class UserInfoController {
	@Autowired
	private final UserInfoService userInfoService;

	public UserInfoController(UserInfoService userInfoService) {
		this.userInfoService = userInfoService;
	}

	@GetMapping
	public UserInfo getUserInfo(String accessToken) {
		return userInfoService.getUserInfo(accessToken).orElseThrow(
				() -> new NotFoundException("Can't find user")
		);
	}
}
