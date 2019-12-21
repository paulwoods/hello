package org.mrpaulwoods.hello;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping
@CrossOrigin(origins = {"*"})
public class HelloController {

    @GetMapping
    public ResponseEntity<Greeting> index() {
        return ResponseEntity.ok(new Greeting("Hello World"));
    }

}
