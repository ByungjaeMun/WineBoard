package com.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class SiteController {
	@RequestMapping({"/", "/photo", "/video", "/new_post"})
	public ModelAndView homePage() {
		return new ModelAndView("index");
	}
}
