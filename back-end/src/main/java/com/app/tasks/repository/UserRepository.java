package com.app.tasks.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.tasks.entity.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
}
