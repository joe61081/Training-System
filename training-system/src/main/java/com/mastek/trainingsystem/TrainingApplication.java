package com.mastek.trainingsystem;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;

@SpringBootApplication
public class TrainingApplication {

	public static void main(String[] args) {
		ConfigurableApplicationContext ctx = SpringApplication.run(TrainingApplication.class, args);

		TrainingAccessAPI trainingAPI = ctx.getBean(TrainingAccessAPI.class);
		ParticipantAccessAPI participantAPI = ctx.getBean(ParticipantAccessAPI.class);
		
		Training newTraining = new Training();
		newTraining.setTitle("Java Training");
		newTraining.setLocation("Leeds");
		newTraining.setDate("10-01-2019");
		
//		trainingAPI.addTraining(newTraining);
//		for (Training p : trainingAPI.listTrainings()) {
//			System.out.println(p);
//		}
		
		Participant newParticipant = new Participant();
		newParticipant.setName("Test");
		newParticipant.setDepartment("Test Department");
		
//		participantAPI.addParticipant(newParticipant);
//		for (Participant p : participantAPI.listParticipants()) {
//			System.out.println(p);
//		}
		
//		newTraining.getParticipants().add(newParticipant);
//		trainingAPI.addTraining(newTraining);
//		participantAPI.addParticipant(newParticipant);
//		for (Training t : trainingAPI.listTrainings()) {
//			System.out.println(t);
//		}
		
		//Training test = trainingAPI.getRepository().findById(1).get();
		
		//System.out.println(trainingAPI.getParticipants(1));
		
		//trainingAPI.addNewParticipantToTraining(6, 6);
		
		
		//ctx.close();
	}

}
