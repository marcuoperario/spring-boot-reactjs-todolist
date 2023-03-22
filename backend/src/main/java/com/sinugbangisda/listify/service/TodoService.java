package com.sinugbangisda.listify.service;

import com.sinugbangisda.listify.model.Todo;
import com.sinugbangisda.listify.repository.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class TodoService {
    @Autowired
    private TodoRepository repository;

    public Todo addTodo(Todo todo) {
        todo.setId(UUID.randomUUID().toString());
        return repository.save(todo);
    }

    public List<Todo> getAllTodos() {
        return repository.findAll();
    }

    public Todo getTodoById(String id) {
        return repository.findById(id).get();
    }

    public List<Todo> getTodosByIsCompleted(boolean isCompleted) {
        return repository.getTodosByIsCompleted(isCompleted);
    }

    public Todo updateTodo(Todo todoRequest, String id) {
        Todo todoReq = repository.findById(id).get();
        todoReq.setEntry(todoRequest.getEntry());
        todoReq.setIsCompleted(todoRequest.getIsCompleted());
        return repository.save(todoReq);
    }

    public String deleteTodo(String id) {
        repository.deleteById(id);
        return "Item deleted.";
    }

}
