package com.sinugbangisda.listify.repository;

import com.sinugbangisda.listify.model.Todo;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface TodoRepository extends MongoRepository<Todo, String> {
    List<Todo> getTodosByIsCompleted(boolean isCompleted);
}
