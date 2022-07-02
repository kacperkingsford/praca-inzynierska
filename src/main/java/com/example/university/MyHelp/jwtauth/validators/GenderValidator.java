package com.example.university.MyHelp.jwtauth.validators;

import com.example.university.MyHelp.jwtauth.annotations.GenderValidation;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;
import java.util.List;

public class GenderValidator implements ConstraintValidator<GenderValidation, String> {
	@Override
	public boolean isValid(String gender, ConstraintValidatorContext context) {
		List<String> list = List.of("MALE", "FEMALE", "OTHER");
		return list.contains(gender);
	}
}
