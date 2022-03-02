package com.users.backend.controller;

import java.util.List;

import com.users.backend.model.Clients;
import com.users.backend.repository.ClientsRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/clients")
public class ClientController {
  
  @Autowired
  private ClientsRepository clientsRepository;

  @CrossOrigin
  @GetMapping
  public List<Clients> getClients() {
    return clientsRepository.findAll();
  }

  @CrossOrigin
  @PostMapping
  @ResponseStatus(HttpStatus.CREATED)
  public Clients create(@RequestBody Clients client) {
    return clientsRepository.save(client);
  }
}
