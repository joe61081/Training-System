package com.mastek.trainingsystem;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import javax.ws.rs.FormParam;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlTransient;

@Entity
@Table(name="SPRING_BOOT_PARTICIPANTS")
@XmlRootElement
public class Participant {
	
	int participantId;
	@FormParam("name")
	String name;
	@FormParam("department")
	String department;
	Set<Training> trainings = new HashSet<>();
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	public int getParticipantId() {
		return participantId;
	}
	
	public void setParticipantId(int participantId) {
		this.participantId = participantId;
	}
	
	public String getName() {
		return name;
	}
	
	public void setName(String name) {
		this.name = name;
	}
	
	public String getDepartment() {
		return department;
	}
	
	public void setDepartment(String department) {
		this.department = department;
	}
	
	@ManyToMany(mappedBy="participants", fetch=FetchType.LAZY)
	@XmlTransient
	public Set<Training> getTrainings() {
		return trainings;
	}
	
	public void setTrainings(Set<Training> trainings) {
		this.trainings = trainings;
	}
	
	@Override
	public String toString() {
		return "Participant [participantId=" + participantId + ", name=" + name + ", department=" + department+"]";
	}

}
