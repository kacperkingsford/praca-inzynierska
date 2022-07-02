package com.example.university.MyHelp.jwtauth.validators;

import com.example.university.MyHelp.jwtauth.annotations.CustomDateConstraint;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;

public class CustomDateValidator implements
		ConstraintValidator<CustomDateConstraint, String> {

	private static final String DATE_PATTERN = "yy-MM-dd";

	@Override
	public void initialize(CustomDateConstraint customDate) {
	}

	@Override
	public boolean isValid(String dateStr, ConstraintValidatorContext context) {
		DateFormat sdf = new SimpleDateFormat(DATE_PATTERN);
		sdf.setLenient(false);
		try {
			sdf.parse(dateStr);
		} catch (ParseException e) {
			return false;
		}
		return true;
	}


}
