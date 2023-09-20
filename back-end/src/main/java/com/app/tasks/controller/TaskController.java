package com.app.tasks.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.app.tasks.entity.Task;
import com.app.tasks.repository.TaskRepository;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import jakarta.persistence.EntityNotFoundException;

@CrossOrigin
@RestController
@RequestMapping("/api/tasks")
public class TaskController {

  private final TaskRepository taskRepository;

  @Autowired
  public TaskController(TaskRepository taskRepository) {
    this.taskRepository = taskRepository;
  }

  @GetMapping
  public List<Task> getAllTasks() {
    return taskRepository.findAll();
  }

  @PostMapping
  @ResponseStatus(HttpStatus.CREATED)
  public Task createTask(@RequestBody Task task) {
    return taskRepository.save(task);
  }

  @PatchMapping("/{id}")
  public ResponseEntity<Task> markTaskAsCompleted(@PathVariable Long id) {
    Task task = taskRepository.findById(id).orElse(null);

    if (task != null) {

      task.setCompleted(true);

      taskRepository.save(task);

      return ResponseEntity.ok(task);
    } else {
      throw new EntityNotFoundException("Task with ID " + id + " not found");
    }
  }

  @DeleteMapping("/{id}")
  @ResponseStatus(HttpStatus.NO_CONTENT)
  public void deleteTask(@PathVariable Long id) {
    if (taskRepository.existsById(id)) {
      taskRepository.deleteById(id);
    } else {
      throw new EntityNotFoundException("Task with ID " + id + " not found");
    }
  }
}
