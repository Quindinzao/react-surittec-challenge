package com.users.backend.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;

@Data
@Entity
public class Clients {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(nullable = false)
  private String name;

  @Column(nullable = false)
  private String cpf;

  @Column(nullable = false)
  private String cep;

  @Column(nullable = false)
  private String log;

  @Column(nullable = false)
  private String district;

  @Column(nullable = false)
  private String city;

  @Column(nullable = false)
  private String uf;

  @Column(nullable = true)
  private String complement;
}
