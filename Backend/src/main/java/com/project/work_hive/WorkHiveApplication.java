package com.project.work_hive;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.modelmapper.ModelMapper;

@SpringBootApplication
public class WorkHiveApplication {

	public static void main(String[] args) {
		SpringApplication.run(WorkHiveApplication.class, args);
	}
	@Bean
	 public ModelMapper modelMapper() {
		 return new ModelMapper();
	 }

}
