package com.app.tasks.service;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.app.tasks.entity.Task;
import com.app.tasks.repository.TaskRepository;

import jakarta.persistence.EntityNotFoundException;

@Service
public class TaskService {
  private final TaskRepository taskRepository;

  public TaskService(TaskRepository taskRepository) {
    this.taskRepository = taskRepository;
  }

  public List<Task> getAllTasks() {
    return taskRepository.findAll();
  }

  public Task createTask(Task task) {
    return taskRepository.save(task);
  }

  public ResponseEntity<Task> updateTask(Long id) {
    Task task = taskRepository.findById(id).orElse(null);

    if (task != null) {

      Boolean isCompleted = task.isCompleted();

      task.setCompleted(!isCompleted);

      taskRepository.save(task);

      return ResponseEntity.ok(task);
    } else {
      throw new EntityNotFoundException("Task with ID " + id + " not found");
    }
  }

  public void deleteTask(Long id) {
    if (taskRepository.existsById(id)) {
      taskRepository.deleteById(id);
    } else {
      throw new EntityNotFoundException("Task with ID " + id + " not found");
    }
  }
}
