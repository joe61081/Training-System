package com.mastek.trainingsystem;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import javax.ws.rs.FormParam;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlTransient;


@Entity
@Table(name="SPRING_BOOT_TRAININGS")
@XmlRootElement
public class Training {
	
	int trainingId;
	@FormParam("title")
	String title;
	@FormParam("location")
	String location;
	@FormParam("date")
	String date;
	Set<Participant> participants = new HashSet<>();

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	public int getTrainingId() {
		return trainingId;
	}
	
	@ManyToMany(cascade=CascadeType.ALL, fetch=FetchType.LAZY)
	@JoinTable(name="JPA_TRAINING_RELATIONS",
	joinColumns= {@JoinColumn(name="FK_TrainingId")},
	inverseJoinColumns= {@JoinColumn(name="FK_ParticipantId")})
	@XmlTransient
	public Set<Participant> getParticipants() {
		return participants;
	}

	public void setParticipants(Set<Participant> participants) {
		this.participants = participants;
	}
	
	public void setTrainingId(int trainingId) {
		this.trainingId = trainingId;
	}
	
	public String getTitle() {
		return title;
	}
	
	public void setTitle(String title) {
		this.title = title;
	}
	
	public String getLocation() {
		return location;
	}
	
	public void setLocation(String location) {
		this.location = location;
	}
	
	public String getDate() {
		return date;
	}
	
	public void setDate(String date) {
		this.date = date;
	}

	@Override
	public String toString() {
		return "Training [trainingId=" + trainingId + ", title=" + title + ", location=" + location + ", date=" + date+"]";
	}
	
}
