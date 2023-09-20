package com.app.tasks.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.tasks.entity.Task;

@Repository
public interface TaskRepository extends JpaRepository<Task, Long> {
}
