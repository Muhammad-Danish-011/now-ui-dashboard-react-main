package com.UserInformation.UserInformation.repository;



import org.springframework.data.jpa.repository.JpaRepository;

import com.UserInformation.UserInformation.model.UserInformation;



public interface UserInformationRepo extends JpaRepository<UserInformation,Long> {
    
    
}
