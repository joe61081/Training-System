package com.mastek.trainingsystem;

import org.glassfish.jersey.server.ResourceConfig;
import org.springframework.stereotype.Component;

@Component
public class ServiceConfig extends ResourceConfig{

	public ServiceConfig() {
		//register the class as a service
		register(CORSFilter.class);
		register(TrainingAccessAPI.class);
		register(ParticipantAccessAPI.class);
	}
}
