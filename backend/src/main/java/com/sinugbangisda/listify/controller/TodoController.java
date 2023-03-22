package com.sinugbangisda.listify.controller;

import com.sinugbangisda.listify.model.Todo;
import com.sinugbangisda.listify.service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/todos")
@CrossOrigin
public class TodoController {
    @Autowired
    private TodoService service;

    @PostMapping("new")
    @ResponseStatus(HttpStatus.CREATED)
    public Todo addTodo(@RequestBody Todo todo) {
        return service.addTodo(todo);
    }

    @GetMapping("all")
    public List<Todo> getAllTodos() {
        return service.getAllTodos();
    }

    @GetMapping("{id}")
    public Todo getTodoById(@PathVariable("id") String id) {
        return service.getTodoById(id);
    }

    @GetMapping("completed={isCompleted}")
    public List<Todo> getTodosByIsCompleted(@PathVariable("isCompleted") boolean isCompleted) {
        return service.getTodosByIsCompleted(isCompleted);
    }

    @PutMapping("{id}")
    public Todo updateTodo(@RequestBody Todo todo, @PathVariable("id") String id) {
        return service.updateTodo(todo, id);
    }

    @DeleteMapping("{id}")
    public String deleteTodo(@PathVariable("id") String id) {
        return service.deleteTodo(id);
    }

}
