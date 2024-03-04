package com.UserInformation.UserInformation.controller;

 import org.springframework.beans.factory.annotation.Autowired;
    import org.springframework.http.ResponseEntity;
    import org.springframework.web.bind.annotation.*;

import com.UserInformation.UserInformation.model.UserInformation;
import com.UserInformation.UserInformation.repository.UserInformationRepo;

import java.util.List;
    
    @CrossOrigin("*")
    @RestController
    @RequestMapping("/UserInformations")



public class UserInformationController {

    
        private final UserInformationRepo UserInformationRepository;
    
        @Autowired
        public UserInformationController(UserInformationRepo UserInformationRepository) {
            this.UserInformationRepository = UserInformationRepository;
        }
    
        @PostMapping("/add")
        public UserInformation addUserInformation(@RequestBody UserInformation UserInformation) {
            return UserInformationRepository.save(UserInformation);
        }
    
        @GetMapping("/all")
        public ResponseEntity<List<UserInformation>> getAllUserInformation() {
            List<UserInformation> UserInformation = UserInformationRepository.findAll();
            return ResponseEntity.ok(UserInformation);
        }
        @DeleteMapping("/delete")
    public ResponseEntity<String> deleteAllUserInformations() {
        UserInformationRepository.deleteAll();
        return ResponseEntity.ok("All UserInformation deleted successfully.");
    }
  
    




}
