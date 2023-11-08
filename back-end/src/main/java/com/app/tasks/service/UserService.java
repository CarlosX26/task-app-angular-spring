package com.app.tasks.service;

import org.springframework.stereotype.Service;

import com.app.tasks.entity.User;
import com.app.tasks.repository.UserRepository;

@Service
public class UserService {
  private final UserRepository userRepository;

  public UserService(UserRepository userRepository) {
    this.userRepository = userRepository;
  }

  public User createUser(User user) {
    return userRepository.save(user);
  }

}
